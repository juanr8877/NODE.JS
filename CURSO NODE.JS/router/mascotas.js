const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async(req,res) => {

    try{

        const arrayMascotasDB = await Mascota.find()

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

router.get('/crearMascota', (req,res) => {
    res.render('crearMascota')
})


//crear
router.post('/', async (req,res) => {
    const body = req.body
    try{

        const mascotaDB = new Mascota(body)
        await mascotaDB.save()
        res.redirect('/mascotas')

    }catch(error){
        console.log(error)
    }
});


//buscar
router.get('/:id', async(req,res) => {

    const id = req.params.id

    try{

        const mascotaDB = await Mascota.findOne({_id:id})

        res.render('detalleMascota', {
            mascota: mascotaDB,
            error: false
        })

    }catch(error){
        console.log(error);
        res.render('detalleMascota', {
            error: true,
            mensaje:'No se enctra el id seleccionado'
        })

    }

})

//eliminar

router.delete('/:id', async(req,res) => {

    const id = req.params.id

    try{

        const mascotaDB = await Mascota.findByIdAndDelete({_id:id})

        if (mascotaDB) {
            res.json({
                estado:true,
                mensaje:'eliminado',
            })
        }else {
            res.json({
                estado:false,
                mensaje: 'fallo eliminado',
            })
        }

    }catch(error){
        console.log(error);
        res.render('detalleMascota', {
            error: true,
        })

    }

})


module.exports = router