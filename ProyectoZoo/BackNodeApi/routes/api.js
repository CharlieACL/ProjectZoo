//Gestionamiento de rutas
const router = require("express").Router();
const { checkToken } = require("../utils/middlewares.js");

router.use('/animales', checkToken,require('./api/animales.js'));
router.use('/usuarios',require('./api/usuarios.js'));


module.exports = router;