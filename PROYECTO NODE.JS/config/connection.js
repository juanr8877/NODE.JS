const mongoose = require('mongoose');

//Conexion a base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0adso2669734.qnkyayn.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0ADSO2669734`;
mongoose.connect(uri)
.then (() => {
  console.log('Base de datos conectada')
})
.catch((error) => {
  console.log(error)
});

module.exports = mongoose;