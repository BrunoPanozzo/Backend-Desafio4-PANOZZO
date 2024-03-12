const { Router } = require('express')

const router = Router()

//endpoints
router.get('/', (req, res) => {
    const data = {
        nombre: req.query.nombre,
        apellido: req.query.apellido,
        title: 'Mi pagina', // este placeholder está en layouts/main
        scripts: ['product.js'],
        styles: ['product.css'],
        useWS: true
    }
    
    res.render('index', data)
})
//

module.exports = router;