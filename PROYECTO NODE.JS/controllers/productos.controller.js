const productoModel = require('../models/productos.model');

exports.listarProductos = async (req, res) => {

    try {
        const productos = await productoModel.find();
        res.render('pages/productos/productos', { productos });
    }catch(error) {
        console.log(error)
    }
};
