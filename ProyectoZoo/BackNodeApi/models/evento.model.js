const { model, Schema } = require('mongoose');

const eventoSchema = new Schema({
    descripcion: String,
    dia: String,
    hora: String,
    duracion: String,
    estado: Boolean
});

module.exports = model("Evento", eventoSchema,"Eventos");