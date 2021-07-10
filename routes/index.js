const express = require('express');
const router = express.Router();
const schemaProyecto = require('../models/validator/Proyecto')
const validator = require('../middleware/validator')
const proyectosController = require('../controllers/proyectoController')

module.exports = function () {
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', validator(schemaProyecto), proyectosController.guardarFormulario);
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);
    router.get('/proyectos/editar/:id', proyectosController.formularioEditar);

    return router;
}