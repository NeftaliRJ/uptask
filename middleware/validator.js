module.exports = validator = (schema, property) => { 
  return (req, res, next) => { 
    const { error } = schema.validate(req.body); 
    const valid = error == null; 

    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const errores = details.map(i => i.message).join(',');

      console.log("error", errores); 
      res.render('nuevo-proyecto', {
          nombrePagina: 'Nuevo proyecto',
          errores
      })
    } 
  } 
} 