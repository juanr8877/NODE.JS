const mongoose = require('../config/connection');
const bcrypt = require('bcrypt');

const FACTOR_COMPLEJIDAD_HASH = 10;

const userSchema = new mongoose.Schema({
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        lowercase: true,  // Convertir el correo a minúsculas
        match: [/\S+@\S+\.\S+/, 'El correo ingresado no es válido'],  // Validación de formato
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
        enum: ['admin', 'user', 'guest'],  // Definir roles permitidos
        default: 'guest',
      },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
}, { timestamps: true }); // Agregar timestamps para fechas de creación y actualización

// Se activa el middleware pre('save') antes de guardar un documento en la base de datos.
userSchema.pre('save', async function (continuar) {
    if (!this.isModified('pass')) return continuar();

    try {
        const salt = await bcrypt.genSalt(FACTOR_COMPLEJIDAD_HASH);
        this.pass = await bcrypt.hash(this.pass, salt);
        continuar(); // Llamar a 'continuar'
    } catch (err) {
        continuar(err); // Pasar el error a 'continuar'
    }
});

// Método para comparar contraseñas
userSchema.methods.compararContraseña = function (compararContraseña) {
    return bcrypt.compare(compararContraseña, this.pass);
};

const userModel = mongoose.model('usuarios', userSchema);

module.exports = userModel;
