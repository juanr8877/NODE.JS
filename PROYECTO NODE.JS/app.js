const express = require("express");
const path = require('path');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const session = require('express-session');
const verificarSesion = require('./config/middlewareVerificarSesion');
const productos = require('./controllers/productos.controller');

// Configurar sesiones
app.use(session({
  secret: 'clave_secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middleware de verificación de sesión
app.use(verificarSesion);

// Ruta principal
app.get('/', productos.listarProductos);

//Rutas
const userRoutes = require('./router/rutasWeb');
app.use('/api', userRoutes);

//Configuración de middlewares
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

//Middleware Multer
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//Middleware para manejar errores 404
app.use((req, res) => {
  res.status(404).render("pages/404");
});

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Puerto de eschuca servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto http://localhost:${PORT}`);
});

