const router = require("express").Router();


const Animal = require('../../models/animal.model')

/*Recupera todos los documentos de animales*/
router.get('/',async (req,res) => {
    try{
        const animal = await Animal.find();
        res.json(animal);
    }catch(error){
        res.json({error:error.message});
    }   
});

/*Recupera un documento por el id de animales*/
router.get('/:animalId', async(req,res) => {
    try{
        const {animalId} = req.params;
        const animal = await Animal.findById(animalId)
        res.json(animal);
    }
    catch{
        res.json({error: error.message});
    }
    
});

/*Agregar*/
router.post('/',async (req,res) => {
    try{
        const animal = await Animal.create(req.body);
        res.json(animal);
    }catch(error){
        res.json({error:error.message});
    }
    
}); 

/*Actualiza*/ 
router.put('/:animalId', async(req,res) => {
    try{
        const {animalId} = req.params;
        const animal = await Animal.findByIdAndUpdate(animalId,req.body,{ new:true });
        res.json(animal);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

/*Eliminar*/
router.delete('/:animalId',async(req,res) => {
    try{
        const {animalId} = req.params;
        const animal = await Animal.findByIdAndDelete(animalId);
        res.json(animal);
    }
    catch(error){
        res.json({error: error.message});
    }
    
});

module.exports = router; 