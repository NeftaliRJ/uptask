const express = require('express');
const router = express.Router();
const schemaProyecto = require('../models/validator/Proyecto')
const validator = require('../middleware/validator')
const proyectosController = require('../controllers/proyectoController')

module.exports = function () {
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', validator(schemaProyecto), proyectosController.guardarFormulario);

    return router;
}