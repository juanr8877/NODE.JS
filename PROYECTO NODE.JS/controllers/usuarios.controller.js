const usuariosModel = require('../models/usuarios.model');

exports.listarUsuarios = async (req, res) => {

    try {
        const usuarios = await usuariosModel.find();
        res.render('pages/usuarios/usuarios', { usuarios });
    }catch(error) {
        console.log(error)
    }
};

exports.insertarUsuarios = async (usuarioNuevo) => {
    try {
        const usuarioExistente = await usuariosModel.findOne({ correo: usuarioNuevo.correo });
        if (usuarioExistente) {
            throw new Error("El correo ya está registrado.");
        }
        return await usuariosModel(usuarioNuevo).save();
    } catch (error) {
        if (error.code === 11000) { // Código de error para clave duplicada
            console.error("Error: El correo ya está registrado.");
            throw new Error("El correo ya está registrado.");
        } else {
            console.error("Error al insertar el usuario:", error);
            throw new Error("Error al insertar el usuario");
        }
    }
};

exports.loginUsuarios = async (req, res) => {
    const { correo, pass } = req.body;  // Obtén el correo y la contraseña del formulario de login

    try {
        // Buscar el usuario por correo en la base de datos
        const usuario = await usuariosModel.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({ mensaje: 'El usuario no existe' });
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const esValido = await usuario.compararContraseña(pass);

        if (!esValido) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Si la contraseña es correcta, puedes proceder con la autenticación
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
};

exports.detalleUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.findById(req.params.id);
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'No se pudo encontrar el usuario' });
    }
};

exports.actualizarUsuarios = async (req, res) => {
    try {
        const {id} = req.params; 
        const {correo, pass, rol, habilitado} = req.body; 

        const datosActualizados = {
            correo: correo,
            pass: pass,
            rol: rol,
            habilitado: habilitado
        };

        const usuarioActualizado = await usuariosModel.findByIdAndUpdate(id, datosActualizados, { new: true, runValidators: true });

        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.redirect("/api/usuarios"); 
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ mensaje: "Se presentó un error al editar el usuario", error: error.message });
    }
};

exports.eliminarUsuarios = async (req, res) => {
    try {
        await usuariosModel.findByIdAndDelete(req.params.id);
        res.redirect('/api/usuarios');
    } catch (error) {
        res.status(500).json({ mensaje: "Se presentó un error" });
    }
};
