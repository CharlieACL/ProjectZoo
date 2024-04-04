const { model, Schema } = require('mongoose');

const animalSchema = new Schema({
    especie: String,
    nombre: String,
    sexo: String,
    peso: String,
    altura: String,
    idZona:{
        type: Schema.Types.ObjectId,
        ref: 'Zona'
    },
    edad: Number,
    activo: Boolean
});

module.exports = model("Animal", animalSchema,"Animales");