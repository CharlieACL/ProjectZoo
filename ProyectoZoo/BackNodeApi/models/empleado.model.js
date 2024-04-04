const { model, Schema } = require('mongoose');

const empleadoSchema = new Schema({
    nombre: String,
    apellido: String,
    identificacion: Number,
    telefono: String,
    idServicio: {
        type:Schema.Types.ObjectId,
        ref:'TipoServicio'
    }
});

module.exports = model("Empleado", empleadoSchema,"Empleados");