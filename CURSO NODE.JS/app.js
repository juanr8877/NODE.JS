// const {frutas,dinero} = require('./frutas')

// const cowsay = require('cowsay')

// console.log(cowsay.say({
//     text : "Hola amigos",
//     e : "oO",
//     T : "U "
// }));


// frutas.forEach(fruta => {
//     console.count(fruta
//     )
// });

// console.log(dinero)

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config();

// const port = 3000
const port = process.env.PORT || 3000;

//conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0adso2669734.qnkyayn.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0ADSO2669734`;

mongoose.connect(uri)
.then (() => {
  console.log('Base de datos conectada')
})
.catch((error) => {
  console.log(error)
})

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//*****
app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/mascotas'))

//midelware
app.use((req, res, next) => {
    res.status(404).render("404", {
    titulo : "ERROR 404",
    descripcion : "titulo del sitio web"})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
