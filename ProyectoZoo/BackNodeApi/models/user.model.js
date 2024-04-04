const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    correo: String,
    contrasenna: String,
    idRol: {
        type: Schema.Types.ObjectId,
        ref: 'rol'
    }
});

module.exports = model("Usuario", userSchema,"Usuarios");