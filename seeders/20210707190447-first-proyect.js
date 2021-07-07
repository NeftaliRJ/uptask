'use strict';

module.exports = {
  up: async (queryInterface) => {

     await queryInterface.bulkInsert('Proyectos', [{
       nombre: 'FirstProyect',
       url: 'first-proyect',
       createdAt: new Date(),
       updatedAt: new Date() 
     }], {});
    
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Proyectos', null, {});
  }
};
