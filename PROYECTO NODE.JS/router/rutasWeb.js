const express = require('express');
const router = express.Router()

const productos = require('../controllers/productos.controller');
const clientes = require('../controllers/clientes.controller');
const pedidos = require('../controllers/pedidos.controller');
const usuarios = require('../controllers/usuarios.controller');

//Productos
router.get('/productos', productos.listarProductos);
router.post('/productos/crear', productos.crearProductos);
router.get('/productos/detalles/:idDetalle', productos.detalleProductos);
router.post('/productos/aliminar/:id', productos.eliminarProductos);
router.post('/productos/editar/:id', productos.actualizarProductos);

//Clientes
router.get('/clientes', clientes.listarClientes);

//Pedidos
router.get('/pedidos', pedidos.listarPedidos);

//Usuarios
router.get('/usuarios', usuarios.listarUsuarios);

module.exports = router;
  