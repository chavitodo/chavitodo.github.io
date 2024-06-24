const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos y parsear bodies de JSON
app.use(express.static('public'));
app.use(express.json());

// Ruta para guardar datos en un archivo CSV
app.post('/guardar', (req, res) => {
    const { data, fecha } = req.body;
    const filePath = path.join(__dirname, 'tablas', `tabla_${fecha}.csv`);
    const fileContent = data.map(e => e.join(',')).join('\n');

    fs.writeFile(filePath, fileContent, err => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
            return res.status(500).send({ success: false, message: "No se pudo guardar el archivo." });
        }
        res.send({ success: true, message: "Datos guardados correctamente." });
    });
});

// Ruta para cargar datos desde un archivo CSV
app.get('/cargar/:fecha', (req, res) => {
    const { fecha } = req.params;
    const filePath = path.join(__dirname, 'tablas', `tabla_${fecha}.csv`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ success: false, message: "No se pudo cargar el archivo." });
        }
        res.json(data.split('\n').map(line => line.split(',')));
    });
});

// Ruta raíz para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
