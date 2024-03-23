const { model, Schema } = require('mongoose');

const empleadoSchema = new Schema({
    nombre: String,
    apellido: String,
    identificacion: Number,
    telefono: String,
    idServicio: Number,
});

module.exports = model("Empleado", empleadoSchema,"Empleados");