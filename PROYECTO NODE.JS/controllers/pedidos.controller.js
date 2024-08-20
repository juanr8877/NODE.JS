const pedidosModel = require('../models/pedidos.model');

exports.listarPedidos = async (req, res) => {

    try {
        const pedidos = await pedidosModel.find();
        res.render('pages/pedidos/pedidos', { pedidos });
    }catch(error) {
        console.log(error)
    }
    
};