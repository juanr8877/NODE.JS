const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Ingrese el nombre completo']
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        minLength:[9, 'El telefono ingresado es muy corto'],
        maxLength:[14, 'El telefono ingresado es muy extenso']
    },
    direccion: {
        type: String,
        trim: true
    },
    habilitado: {
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    }
});

const  clienteModel = mongoose.model('clientes', clienteSchema);

module.exports = clienteModel;