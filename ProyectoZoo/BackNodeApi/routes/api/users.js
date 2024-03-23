const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt =require('jsonwebtoken');

const Usuario = require('../../models/user.model');

//VerLista
router.get('/',async (req,res) => {
    try{
        const usuario = await Usuario.find();
        res.json(usuario);
    }catch(error){
        res.json({error:error.message});
    }   
});

//AccederId
router.get('/:usuarioId', async(req,res) => {
    try{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findById(usuarioId)
        res.json(usuario);
    }
    catch{
        res.json({error: error.message});
    }
    
});

//Agregar
router.post('/',async (req,res) => {
    try{
        req.body.contrasenna = bcryptjs.hashSync(req.body.contrasenna, 8);  
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    }
    catch(error){
        res.json({error: error.message});
    }
    
}); 

//Actualizar
router.put('/:usuarioId', async(req,res) => {
    try{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findByIdAndUpdate(usuarioId,req.body,{ new:true });
        res.json(usuario);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

//Eliminar
router.delete('/:usuarioId',async(req,res) => {
    try{
        const {usuarioId} = req.params;
        const usuario = await Usuario.findByIdAndDelete(usuarioId);
        res.json(usuario);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

module.exports = router;