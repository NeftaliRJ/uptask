const Proyectos = require("../models/Proyecto");

exports.proyectosHome =(req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto =(req, res) => {
    res.render('nuevo-proyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.guardarFormulario = async (req, res) => {
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre'});
    }

    if(errores.length > 0) {
        res.render('nuevo-proyecto', {
            nombrePagina: 'Nuevo proyecto',
            errores
        })
    } else {

         const proyecto = await Proyectos.create({ nombre });
         res.redirect('/');
    }
}