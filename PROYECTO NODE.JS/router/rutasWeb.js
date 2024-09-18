const express = require('express');
const router = express.Router()
const upload = require('../config/multer');
const middlewareAutenticacion = require('../config/middlewareAutenticacion');

const productos = require('../controllers/productos.controller');
const clientes = require('../controllers/clientes.controller');
const pedidos = require('../controllers/pedidos.controller');
const usuarios = require('../controllers/usuarios.controller');

//Productos
router.get('/productos',middlewareAutenticacion, productos.listarProductos);
router.post('/productos/crear',middlewareAutenticacion, upload.single('imagen'), productos.crearProductos);
router.get('/productos/detalles/:id',middlewareAutenticacion, productos.detalleProductos);
router.post('/productos/aliminar/:id',middlewareAutenticacion, productos.eliminarProductos);
router.post('/productos/editar/:id',middlewareAutenticacion,upload.single('imagen'), productos.actualizarProductos);

//Clientes
router.get('/clientes',middlewareAutenticacion, clientes.listarClientes);
router.get('/clientes/detalles/:id',middlewareAutenticacion, clientes.detalleClientes);
router.post('/clientes/aliminar/:id',middlewareAutenticacion, clientes.eliminarClientes);
router.post('/clientes/editar/:id',middlewareAutenticacion, clientes.actualizarClientes);
router.post('/clientes/registrar/',clientes.registroCompleto);

//Pedidos
router.get('/pedidos',middlewareAutenticacion, pedidos.listarPedidos);

//Usuarios
router.get('/usuarios',middlewareAutenticacion, usuarios.listarUsuarios);
router.post('/usuarios/login/', usuarios.loginUsuarios);
router.get('/usuarios/detalles/:id',middlewareAutenticacion, usuarios.detalleUsuarios);
router.post('/usuarios/aliminar/:id',middlewareAutenticacion, usuarios.eliminarUsuarios);
router.post('/usuarios/editar/:id',middlewareAutenticacion, usuarios.actualizarUsuarios);

//Autenticacion
router.get('/login', usuarios.vistaLogin);


module.exports = router;
  