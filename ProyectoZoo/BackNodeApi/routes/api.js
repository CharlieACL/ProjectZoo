//Gestionamiento de rutas
const router = require("express").Router();
const { checkToken } = require("../utils/middlewares.js");

router.use('/animales', checkToken,require('./api/animales.js'));
router.use('/usuarios',require('./api/usuarios.js'));
router.use('/users',checkToken,require('./api/users.js'));
router.use('/empleados',checkToken,require('./api/empleados.js'));


module.exports = router;