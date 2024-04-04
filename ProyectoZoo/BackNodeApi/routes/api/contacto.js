const router = require("express").Router();

const Contacto = require('../../models/contacto.model');

//VerLista
router.get('/',async (req,res) => {
    try{
        const contacto = await Contacto.find();
        res.json(contacto);
    }catch(error){
        res.json({error:error.message});
    }   
});

//Agregar
router.post('/',async (req,res) => {
    try{
        const contacto = await Contacto.create(req.body);
        res.json(contacto);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});


module.exports = router; 