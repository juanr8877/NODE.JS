const clientesModel = require('../models/clientes.model');
const usuarioController = require ('./usuarios.controller');
const nodemailer = require('../views/utils/nodemailer')


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

exports.eliminarClientes = async (req, res) => {
    try {
        await clientesModel.findByIdAndDelete(req.params.id);
        res.redirect('/api/clientes');
    } catch (error) {
        res.status(500).json({ mensaje: "Se presentó un error" });
    }
};

exports.actualizarClientes = async (req, res) => {
    try {
        const {id} = req.params; // Tomar el ID del cliente de los parámetros
        const {nombre, telefono, direccion, usuario, habilitado} = req.body; // Tomar los datos del cuerpo de la solicitud

        // Crear objeto con los datos actualizados
        const datosActualizados = {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            habilitado: habilitado,
            usuario: usuario
        };

        // Intentar actualizar el cliente
        const clienteActualizado = await clientesModel.findByIdAndUpdate(id, datosActualizados, { new: true, runValidators: true });

        if (!clienteActualizado) {
            return res.status(404).json({ mensaje: "Cliente no encontrado" });
        }

        res.redirect("/api/clientes"); // Redirigir a la lista de clientes después de la actualización
    } catch (error) {
        console.error("Error al actualizar el cliente:", error);
        res.status(500).json({ mensaje: "Se presentó un error al editar el cliente", error: error.message });
    }
};


exports.insertarClientes = async (nuevoCliente) => {
    try{
        return await clientesModel(nuevoCliente).save();
    }catch(error){
        console.log(error)
    }
};


exports.registroCompleto = async (req, res) => {
    try {
        const usuario = {
            correo: req.body.correoUsuario,
            pass: req.body.passUsuario,
            rol: req.body.rolUsuario,
            habilitado: true
        };
        console.log(usuario);
        let usuarito = await usuarioController.insertarUsuarios(usuario);
        
        if (!usuarito) {
            throw new Error("Error al crear el usuario"); // Lanza un error si usuarito es undefined
        }

        console.log(usuarito);
        
        const client = {
            nombre: req.body.nombreCliente,
            telefono: req.body.telefonoCliente,
            direccion: req.body.direccionCliente,
            habilitado: true,
            usuario: usuarito._id 
        };
        await exports.insertarClientes(client);
        await nodemailer.sendEmail(usuario.correo, "Confirmación de Registro",`Gracias por tu registro ${nombre} `);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ mensaje: "Se presentó un error" });
        console.error(error);
    }
};