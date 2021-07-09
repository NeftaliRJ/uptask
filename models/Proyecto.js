const Sequilize = require('sequelize');
const uuid = require('uuid');
const slug = require('slug');
const shortId = require('shortid')
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
            const url = slug(proyecto.nombre).toLocaleLowerCase();

            proyecto.url = `${url}-${shortId.generate()}`;
        }
    }
});

module.exports = Proyectos;