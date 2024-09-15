const express = require('express');
const router = express.Router()
const upload = require('../config/multer');

const productos = require('../controllers/productos.controller');
const clientes = require('../controllers/clientes.controller');
const pedidos = require('../controllers/pedidos.controller');
const usuarios = require('../controllers/usuarios.controller');

//Productos
router.get('/productos', productos.listarProductos);
router.post('/productos/crear', upload.single('imagen'), productos.crearProductos);
router.get('/productos/detalles/:id', productos.detalleProductos);
router.post('/productos/aliminar/:id', productos.eliminarProductos);
router.post('/productos/editar/:id',upload.single('imagen'), productos.actualizarProductos);

//Clientes
router.get('/clientes', clientes.listarClientes);
router.get('/clientes/detalles/:id', clientes.detalleClientes);
router.post('/clientes/aliminar/:id', clientes.eliminarClientes);
router.post('/clientes/editar/:id', clientes.actualizarClientes);
router.post('/clientes/registrar/', clientes.registroCompleto);

//Pedidos
router.get('/pedidos', pedidos.listarPedidos);

//Usuarios
router.get('/usuarios', usuarios.listarUsuarios);
router.post('/usuarios/login/', usuarios.loginUsuarios);
router.get('/usuarios/detalles/:id', usuarios.detalleUsuarios);
router.post('/usuarios/aliminar/:id', usuarios.eliminarUsuarios);
router.post('/usuarios/editar/:id', usuarios.actualizarUsuarios);

module.exports = router;
  