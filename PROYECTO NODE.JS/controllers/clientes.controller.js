const clientesModel = require('../models/clientes.model');

exports.listarClientes = async (req, res) => {

    try {
        const clientes = await clientesModel.find();
        res.render('pages/clientes/clientes', { clientes });
    }catch(error) {
        console.log(error)
    }
    
};