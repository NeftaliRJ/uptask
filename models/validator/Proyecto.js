const Joi = require('joi') 

const proyecto =  Joi.object().keys({ 
    nombre: Joi.string()
        .min(3)
        .max(30)
        .required(),
}) 

module.exports = proyecto;