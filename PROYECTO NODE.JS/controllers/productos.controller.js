const productoModel = require('../models/productos.model');

exports.listarProductos = async (req, res) => {

    try {
        const productos = await productoModel.find();
        res.render('pages/productos/productos', { productos });
    }catch(error) {
        console.log(error)
    }
};

exports.crearProductos = async (req, res) => {

    try {
        const productos = new productoModel(req.body);
        await productos.save();
        res.redirect('/api/productos');
    }catch(error) {
        console.log(error)
    }
};


exports.detalleProductos = async (req, res) => {

    try {
        const productos = await productoModel.findById(req.params.id);
        res.render('pages/productos/productosDetalle', { productos, error:false });
        
    }catch(error) {
        console.log(error)
        res.render('pages/productos/productosDetalle', { productos, error:true, mensaje: 'No se encontro el Id seleccionado' });
    }
};

exports.eliminarProductos = async (req, res) => {
    try {
        await productoModel.findByIdAndDelete(req.params.id);
        res.redirect('/api/productos');
    } catch (error) {
        res.status(500).json({ mensaje: "Se presentó un error" });
    }
};

exports.editarProductos = async (req, res) => {
    
    try {
        await productoModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/api/productos');
    } catch (error) {
        res.status(500).json({ mensaje: "Se presentó un error" });
    }
};
