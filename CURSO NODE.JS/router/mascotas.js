const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async(req,res) => {

    try{

        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas : arrayMascotasDB
            // arrayMascotas: [
            //     {id:'23453457',nombre:'mango', descripcion: 'gato pardo'},
            //     {id:'23467345',nombre:'coco', descripcion: 'gato blanco con negro'}
            // ]
        })

    }catch(error){
        console.log(error);
    }

})

module.exports = router