const mongoose = require('../config/connection');

const clienteSchema = new mongoose.Schema({  
    nombreCompleto: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio'],
        trim: true,
        minlength: [8, 'Debe ser el nombre completo'],
        maxLenght: [150, 'El nombre completo ingresado es muy extenso']
    },
    telefono: { 
        type: String, 
        required: [true , 'El telefono es requerido'],
        trim: true,
        minlength: [9, 'Si es un número fijo, debes agregar el indicativo del pais ej: 604 ...'],
        maxLenght: [14, 'El teléfono no puede tener mas de 10 carácteres.']
    },
    direccion : { 
        type: String, 
        required: [true , 'La direccion es requerido'],
        trim: true,
        minlength: [9, 'La direccion ingresada es muy corta'],
    },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
});

const  clienteModel = mongoose.model('clientes', clienteSchema);

module.exports = clienteModel;