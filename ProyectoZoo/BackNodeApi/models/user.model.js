const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    correo: String,
    contrasenna: String,
    idRol: Number
});

module.exports = model("Usuario", userSchema,"Usuarios");