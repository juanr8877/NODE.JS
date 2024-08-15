const express = require('express');
const router = express.Router();

// router.use('/', require('./router/rutasWeb'));
// router.use('/mascotas', require('./router/mascotas'))

router.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
  })
  
router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios : "Este es el titulo de servicios"})
})

module.exports = router