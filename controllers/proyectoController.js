const Proyectos = require("../models/Proyecto");

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('nuevo-proyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    });
}

exports.guardarFormulario = async (req, res) => {
    const { nombre } = req.body;

    await Proyectos.create({ nombre });
    res.redirect('/');
}

exports.proyectoPorUrl = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    const { url } = req.params
    console.log(url)
    const proyecto = await Proyectos.findOne({
        where: {
            url
        }
    })
    res.render('tareas', {
        nombrePagina: 'Tareas del proyecto',
        proyecto,
        proyectos
    })
}

exports.formularioEditar = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    const { id } = req.params
    console.log(url)
    const proyecto = await Proyectos.findOne({
        where: {
            id
        }
    })
    res.render('tareas', {
        nombrePagina: 'Tareas del proyecto',
        proyecto,
        proyectos
    })
}