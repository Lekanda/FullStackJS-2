const express = require('express');
const router = express.Router();
// Importar el controlador
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {

    router.get('/', () => {
        console.log('en home');
        
    });

    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    return router;
}
