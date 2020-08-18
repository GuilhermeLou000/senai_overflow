'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser feito

    return queryInterface.createTable("alunos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      ra: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false
      },
      uptated_at: {
        type:Sequelize.DATE,
        allowNull:false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    // aqui dizemos o que deve ser desfeito

    return queryInterface.dropTable("alunos");
  }
};
