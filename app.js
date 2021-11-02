const express = require("express");
const app = express();
const path = require ("path")
const publicPatch = path.resolve(__dirname, "./public");
app.use( express.static(publicPatch) );

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})






/*app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/');
    res.sendFile (htmlPath);
});*/

/*app.get('/', function(req, res){
    res.send('servidor funcionando')
    });*/
