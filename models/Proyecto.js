const Sequilize = require('sequelize');
const uuid = require('uuid');
const slug = require('slug');

const db = require('../config/db');
const { Sequelize } = require('../config/db');

const Proyectos = db.define('proyectos', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre : Sequilize.STRING,
    url: Sequilize.STRING
}, {
    hooks: {
        beforeCreate(proyecto) {
            proyecto.url = slug(proyecto.nombre).toLocaleLowerCase()
        }
    }
});

module.exports = Proyectos;