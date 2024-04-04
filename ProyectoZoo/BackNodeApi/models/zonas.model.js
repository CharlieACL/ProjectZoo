const { model, Schema } = require('mongoose');

const zonaSchema = new Schema({
    id: Schema.Types.ObjectId, 
    idZona: Number, 
    nombreZona: String
});

module.exports = model("Zona", zonaSchema,"Zonas");
