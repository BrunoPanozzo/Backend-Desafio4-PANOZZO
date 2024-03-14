const { Router } = require('express')
const ProductManager = require('../ProductManager')

const router = Router()
const fileName = `${__dirname}/../../products.json`
const productManager = new ProductManager(fileName)

//endpoints

router.get('/home', async (req, res) => {

    let allProducts = await productManager.getProducts()

    const data = {        
        title: 'Home', 
        styles: ['home.css'],
        allProducts
    }
    
    res.render('home', data)
})

router.get('/realTimeProducts', async (req, res) => {

    let allProducts = await productManager.getProducts()

    const data = {        
        title: 'Real Time Products', 
        scripts: ['realTimeProducts.js'],
        styles: ['home.css', 'realTimeProducts.css'],
        allProducts
    }
    
    res.render('realTimeProducts', data)
})

router.get('/createProduct', async (req, res) => {

    let allProducts = await productManager.getProducts()

    const data = {        
        title: 'Create Product', 
        // scripts: ['realTimeProducts.js'],
        // styles: ['home.css', 'realTimeProducts.css'],
        allProducts
    }
    
    res.render('createProduct', data)
})

//

module.exports = router;