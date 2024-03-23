const router = require("express").Router();

const Empleado = require('../../models/empleado.model')

router.get('/',async (req,res) => {
    try{
        const empleado = await Empleado.find();
        res.json(empleado);
    }catch(error){
        res.json({error:error.message});
    }   
});

router.get('/:empleadoId', async(req,res) => {
    try{
        const {empleadoId} = req.params;
        const empleado = await Empleado.findById(empleadoId)
        res.json(empleado);
    }
    catch{
        res.json({error: error.message});
    }
    
});

router.post('/',async (req,res) => {
    try{
        const empleado = await Empleado.create(req.body);
        res.json(empleado);
    }catch(error){
        res.json({error:error.message});
    }
    
}); 

router.put('/:empleadoId', async(req,res) => {
    try{
        const {empleadoId} = req.params;
        const empleado = await Empleado.findByIdAndUpdate(empleadoId,req.body,{ new:true });
        res.json(empleado);
    }
    catch(error){
        res.json({error: error.message});
    }  
});

router.delete('/:empleadoId',async(req,res) => {
    try{
        const {empleadoId} = req.params;
        const empleado = await Empleado.findByIdAndDelete(empleadoId);
        res.json(empleado);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

module.exports = router;

