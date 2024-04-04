const { model, Schema } = require('mongoose');

const contactoSchema = new Schema({
    id: Schema.Types.ObjectId,
    correo: String,
    telefono: String,
    mensaje: String
});

module.exports = model("Contacto", contactoSchema,"Contacto");