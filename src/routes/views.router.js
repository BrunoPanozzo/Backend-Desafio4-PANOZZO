const { Router } = require('express')
const ProductManager = require('../ProductManager')

const router = Router()
const fileName = `${__dirname}/../../products.json`
const productManager = new ProductManager(fileName)

//endpoints

router.get('/home', async (req, res) => {

    let allProducts = await productManager.getProducts()

    const data = {        
        title: 'Home', // este placeholder está en layouts/main
        // scripts: ['product.js'],
        styles: ['home.css'],
        allProducts
    }
    
    res.render('home', data)
})
//

module.exports = router;