const usuariosModel = require('../models/usuarios.model');

exports.listarUsuarios = async (req, res) => {

    try {
        const usuarios = await usuariosModel.find();
        res.render('pages/usuarios/usuarios', { usuarios });
    }catch(error) {
        console.log(error)
    }
};
