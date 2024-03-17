const { model, Schema } = require('mongoose');

const animalSchema = new Schema({
    especie: String,
    nombre: String,
    sexo: String,
    peso: String,
    altura: String,
    idZona: Number,
    edad: Number,
    activo: Boolean
});

module.exports = model("Animal", animalSchema,"Animales");