const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const carritoSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    productos: [
        {
            productoId: {
                type: Schema.Types.ObjectId,
                ref: 'productos',
                required: true
            },
            cantidad: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    totalPrecio: {
        type: Number,
        required: true,
        min: 0
    }
});

const Carrito = mongoose.model('carrito', carritoSchema);
module.exports = Carrito;