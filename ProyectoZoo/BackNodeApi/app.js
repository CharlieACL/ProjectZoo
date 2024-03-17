const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./Config/db');

const app = express();

//Configuración de express para convertir los datos json a objetos javascript
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
    console.log(`Corriendo en puerto: ${PORT}`);
})