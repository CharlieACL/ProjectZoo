//Gestionamiento de rutas
const router = require("express").Router();
const { checkToken } = require("../utils/middlewares.js");

router.use('/animales', checkToken,require('./api/animales.js'));
router.use('/usuarios',require('./api/usuarios.js'));
router.use('/users',checkToken,require('./api/users.js'));
router.use('/empleados',checkToken,require('./api/empleados.js'));
router.use('/eventos',checkToken,require('./api/eventos.js'));
router.use('/contacto',require('./api/contacto.js'));

module.exports = router;