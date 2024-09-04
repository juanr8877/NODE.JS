const express = require('express');
const router = express.Router()

const productos = require('../controllers/productos.controller');
const clientes = require('../controllers/clientes.controller');
const pedidos = require('../controllers/pedidos.controller');
const usuarios = require('../controllers/usuarios.controller');

//Productos
router.get('/productos', productos.listarProductos);
router.post('/productos/crear', productos.crearProductos);
router.get('/productos/detalles/:id', productos.detalleProductos);
router.post('/productos/aliminar/:id', productos.eliminarProductos);
router.post('/productos/editar/:id', productos.actualizarProductos);

//Clientes
router.get('/clientes', clientes.listarClientes);
router.get('/clientes/detalles/:id', clientes.detalleClientes);
router.post('/clientes/aliminar/:id', clientes.eliminarClientes);
router.post('/clientes/editar/:id', clientes.actualizarClientes);



//Pedidos
router.get('/pedidos', pedidos.listarPedidos);

//Usuarios
router.get('/usuarios', usuarios.listarUsuarios);

module.exports = router;
  