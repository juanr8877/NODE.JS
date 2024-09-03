const clientesModel = require('../models/clientes.model');

exports.listarClientes = async (req, res) => {

    try {
        const clientes = await clientesModel.find();
        res.render('pages/clientes/clientes', { clientes });
    }catch(error) {
        console.log(error)
    }
    
};

exports.detalleClientes = async (req, res) => {
    try {
        const clientes = await clientesModel.findById(req.params.id);
        res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'No se pudo encontrar el cliente' });
    }
};