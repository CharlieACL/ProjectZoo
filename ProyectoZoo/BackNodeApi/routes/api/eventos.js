const router = require("express").Router();

const Evento = require('../../models/evento.model')

router.get('/',async (req,res) => {
    try{
        const evento = await Evento.find();
        res.json(evento);
    }catch(error){
        res.json({error:error.message});
    }   
});

router.get('/:eventoId', async(req,res) => {
    try{
        const {eventoId} = req.params;
        const evento = await Evento.findById(eventoId)
        res.json(evento);
    }
    catch{
        res.json({error: error.message});
    }
    
});

/*Agregar*/
router.post('/',async (req,res) => {
    try{
        const evento = await Evento.create(req.body);
        res.json(evento);
    }catch(error){
        res.json({error:error.message});
    }
    
}); 

/*Actualiza*/ 
router.put('/:eventoId', async(req,res) => {
    try{
        const {eventoId} = req.params;
        const evento = await Evento.findByIdAndUpdate(eventoId,req.body,{ new:true });
        res.json(evento);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

/*Eliminar*/
router.delete('/:eventoId',async(req,res) => {
    try{
        const {eventoId} = req.params;
        const evento = await Evento.findByIdAndUpdate(eventoId,{estado: false},{new:true});
        res.json(evento);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

module.exports = router;
