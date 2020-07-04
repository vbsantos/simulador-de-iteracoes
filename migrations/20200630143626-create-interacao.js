"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Interacaos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      frequencia: {
        type: Sequelize.STRING,
      },
      int_minimas: {
        type: Sequelize.INTEGER,
      },
      peso_ach: {
        type: Sequelize.FLOAT,
      },
      peso_dis: {
        type: Sequelize.FLOAT,
      },
      peso_fre: {
        type: Sequelize.FLOAT,
      },
      peso_pla: {
        type: Sequelize.FLOAT,
      },
      peso_phi: {
        type: Sequelize.FLOAT,
      },
      peso_soc: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Interacaos");
  },
};
