const { model, Schema } = require('mongoose');

const servicioSchema = new Schema({
    id: Schema.Types.ObjectId,
    idServicio: Number,
    descripcion: String
});

module.exports = model("TipoServicio", servicioSchema,"TipoServicio");