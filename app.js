const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', function(req, res){
    res.send('servidor funcionando')
    });

    //hola mundo uno dos tres cutro