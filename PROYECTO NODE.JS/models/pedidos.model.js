const mongoose = require('../config/connection');

const pedidoSchema = new mongoose.Schema({  
    cliente: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio'],
        trim: true,
        minlength: [8, 'Debe ser el nombre completo'],
        maxLenght: [150, 'El nombre completo ingresado es muy extenso']
    },
    carrito: { 
        type: Array, 
        required: [true , 'Debe agregar almenos un producto.']
    },
    Subtotal : { 
        type: Number, 
        required: [true , 'La direccion es requerido'],
        trim: true
    },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
});

const  pedidoModel = mongoose.model('pedidos', pedidoSchema);

module.exports = pedidoModel;