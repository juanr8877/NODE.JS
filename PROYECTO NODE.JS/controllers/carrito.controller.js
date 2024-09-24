const carritoModel = require('../models/carrito.model');
const productoModel = require('../models/productos.model');

// Añadir producto al carrito
exports.agregarProductos = async (req, res) => {
    try {
        const productoId = req.params.id;
        const cantidad = req.body.cantidad || 1;

        let carrito = await carritoModel.findOne({ userId: req.session.userId });
        if (!carrito) {
            carrito = new carritoModel({ userId: req.session.userId, productos: [], totalPrecio: 0 });
        }

        const producto = await productoModel.findById(productoId);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }

        const productoEnCarrito = carrito.productos.find(p => p.productoId.toString() === productoId);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
        } else {
            carrito.productos.push({ productoId, cantidad });
        }

        await carrito.save();
        res.status(200).send('Producto añadido al carrito');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar producto del carrito
exports.eliminarProductos = async (req, res) => {
    try {
        const productoId = req.params.id;

        let carrito = await carritoModel.findOne({ userId: req.session.userId });
        if (!carrito) {
            return res.status(404).send('Carrito no encontrado');
        }

        carrito.productos = carrito.productos.filter(p => p.productoId.toString() !== productoId);
        await carrito.save();
        res.status(200).send('Producto eliminado del carrito');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Ver carrito
exports.verCarrito = async (req, res) => {
    try {
        const carrito = await carritoModel.findOne({ userId: req.session.userId }).populate('productos.productoId');
        if (!carrito) {
            return res.status(404).json({ message: 'Carrito vacío' });
        }
        res.json(carrito); // Cambiado a JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
