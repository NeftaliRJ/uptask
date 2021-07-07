const Sequilize = require('sequelize');
const uuid = require('uuid');
const slug = require('slug');

const db = require('../config/db');

const Proyectos = db.define('Proyectos', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre : {
        type: Sequilize.STRING,
        allowNull: true
    },
    url: Sequilize.STRING
}, {
    hooks: {
        beforeCreate(proyecto) {
            proyecto.url = slug(proyecto.nombre).toLocaleLowerCase()
        }
    }
});

module.exports = Proyectos;