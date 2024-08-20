const mongoose = require('../config/connection');

const userSchema = new mongoose.Schema({
    correo: { 
        type: String, 
        required: [true, 'El correo es obligatorio'], 
        unique: true 
    },
    pass: { 
        type: String, 
        required: [true, 'La contraseña es obligatoria'],
        minlength: [5, 'La contraseña debe tener al menos 5 caracteres'],
        maxlength: [20, 'La contraseña debe tener máximo 20 caracteres']
    },
    rol: { 
        type: String, 
        required: true,
        default: 'guest' 
    },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
});

const userModel = mongoose.model('usuarios', userSchema);

module.exports = userModel;
