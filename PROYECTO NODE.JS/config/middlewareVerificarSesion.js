// middleware/verificarSesion.js
module.exports = (req, res, next) => {
    res.locals.usuarioAutenticado = req.session.usuario ? true : false;
    next();
};
