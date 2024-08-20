const mongoose = require('../config/connection');

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia es obligatoria']
    },
    nombre: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    precio: {
        type: Number,
        default: [0, 'El precio por defecto es cero'],
        min: [0, 'El precio mínimo es cero']
    },
    stock: {
        type: Number,
        default: [0, 'El stock por defecto es cero'],
        min: [0, 'El stock por defecto es cero']
    },
    imagen: {
        type: String,
        required: [true, 'No existe la imagen o ruta a la imagen por defecto']
    },
    habilitado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: mongoose.SchemaTypes.ObjectId,
    }
});

//Creacion de modelo
const productoModel = mongoose.model('productos', schemaProducto);

module.exports = productoModel;
``
