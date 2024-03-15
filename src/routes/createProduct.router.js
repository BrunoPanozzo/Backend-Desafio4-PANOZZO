const { Router } = require('express')
const ProductManager = require('../ProductManager')

const router = Router()
const fileName = `${__dirname}/../../products.json`
const productManager = new ProductManager(fileName)

//endpoints

router.get('/', async (req, res) => {
    const data = {        
        title: 'Create Product', 
        scripts: ['createProduct.js'],
        styles: ['home.css'],
        useWS: true
    }
    
    res.render('createProduct', data)
})

router.post('/', async (req, res) => {
    const newProduct = req.body

    newProduct.thumbnail = ["/images/productos/" + newProduct.thumbnail]

    //agregar el producto al productManager
    await productManager.addProduct(newProduct.title,
                                    newProduct.description,
                                    newProduct.price,
                                    newProduct.thumbnail,
                                    newProduct.code,
                                    newProduct.stock,
                                    newProduct.status,
                                    newProduct.category)

    //notificar a los demás browsers mediante WS
    req.app.get('wsServer').emit('newProduct', newProduct)

     let allProducts = await productManager.getProducts()
console.log(allProducts)
    // // const data = {        
    // //     title: 'Real Time Products', 
    // //     scripts: ['realTimeProducts.js'],
    // //     styles: ['home.css', 'realTimeProducts.css'],
    // //     useWS: true,
    // //     allProducts
    // // }
    
    res.redirect('/home')
})

//init methods

const main = async () => {
    await productManager.inicializar()
}

main()

module.exports = router;
