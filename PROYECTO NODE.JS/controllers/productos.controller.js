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
        const productos = await productoModel.findById(req.params.idDetalle);

        if (!productos) {
            return res.status(404).json({ error: true, mensaje: 'Producto no encontrado' });
        }

        res.json({ error: false, productos });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: true, mensaje: 'No se encontró el Id seleccionado' });
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

exports.actualizarProductos = async (req, res) => {
    try {
        const {id} = req.params; // Tomar el ID del cliente de los parámetros
        const { referencia, nombre, descripcion, precio, stock, imagen, habilitado } = req.body; // Tomar los datos del cuerpo de la solicitud

        // Crear objeto con los datos actualizados
        const datosActualizados = {
            referencia: referencia,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            stock: stock,
            imagen: imagen,
            habilitado: habilitado
        };

        // Intentar actualizar el cliente
        const productoActualizado = await productoModel.findByIdAndUpdate(id, datosActualizados, { new: true, runValidators: true });

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.redirect("/api/productos"); // Redirigir a la lista de clientes después de la actualización
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ mensaje: "Se presentó un error al editar el producto", error: error.message });
    }
};