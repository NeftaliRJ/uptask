const Proyectos = require("../models/Proyecto");

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto =(req, res) => {
    res.render('nuevo-proyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.guardarFormulario = async (req, res) => {
    const { nombre } = req.body;

    await Proyectos.create({ nombre });
    res.redirect('/');
}

exports.proyectoPorUrl = async (req, res) => {
    const { url } = req.params
    console.log(url)
    const proyecto = await Proyectos.findOne({
        where: {
            url
        }
    })
    res.render('tareas', {
        nombrePagina: 'Tareas del proyecto',
        proyecto
    })
}