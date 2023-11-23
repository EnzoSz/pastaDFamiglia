//importo express
const express = require('express');
//importo path
const path = require('path');
 //ejecuto express
const app = express();
//obtenemos la ruta absoluta de la carpeta public
const publicPath = path.resolve(__dirname, '../public');
//le decimos a express que la carpeta public es estatica
app.use(express.static(publicPath));
//levantamos el servidor en el puerto 3000
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

// Definimos las rutas
// ruta raiz / o home
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

// ruta /productos
app.get('/productos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productos.html'));
});



