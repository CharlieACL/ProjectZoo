const jwt = require('jsonwebtoken');

const checkToken = (req,res,next) => {
    if(!req.headers['authorization']){
        return res.json({error:'No se encuentra en Token'});
    }

    const token = req.headers['authorization'];
    
    let payload;
    try
    {
        payload = jwt.verify(token,'tokenPass');
    }
    catch
    {
        return res.json({error: 'El token no es valido'});
    }
    
    next();
}

module.exports ={checkToken}