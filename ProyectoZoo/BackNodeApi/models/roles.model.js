const { model, Schema } = require('mongoose');

const rolSchema = new Schema({
    id: Schema.Types.ObjectId,
    idRol: Number,
    nombreRol: String
});

module.exports = model("rol", rolSchema,"Roles");