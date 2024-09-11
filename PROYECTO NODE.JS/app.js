const express = require("express");
const path = require('path');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Ruta principal
app.get("/", (req, res) => {
  res.render('pages/index');
});

//Rutas
const userRoutes = require('./router/rutasWeb');
app.use('/api', userRoutes);

//Configuración de middlewares
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

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

