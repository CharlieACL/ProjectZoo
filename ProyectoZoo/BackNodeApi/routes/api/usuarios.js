const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt =require('jsonwebtoken');

const Usuario = require('../../models/user.model');
//Register
router.post('/register', async (req,res) =>{
    //encriptación de contraseña
    try{
        req.body.contrasenna = bcryptjs.hashSync(req.body.contrasenna, 8);  
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    }
    catch(error){
        res.json({error: error.message});
    }
});

//Login
router.post('/login',async (req,res) =>{
    try{
        //Compruevo si el mail existe
        const usuario = await Usuario.findOne({correo:req.body.correo}); 
        const idRol = usuario.idRol;

        if(!usuario){
            return res.json({error:"correo o contraseña incorrectos"});
        }

        //Comparo la contraseña ingresada con la del usuario
        const eq = bcryptjs.compareSync(req.body.contrasenna, usuario.contrasenna);
        if(!eq){
            return res.json({error: 'correo o contraseña incorrectos'});
        }


        res.json({success: 'Iniciando Sesión...', idRol,token: createToken(usuario)});
    }
    catch(error)
    {
        res.json({error:error.message});
    }
});

function createToken(usuario){
    const payload ={
        user_correo: usuario.correo,
        user_role: usuario.idRol
    }
    return jwt.sign(payload,'tokenPass')
}


module.exports = router;