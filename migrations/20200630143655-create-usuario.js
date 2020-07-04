"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      data_nasc: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
      pt_ach: {
        type: Sequelize.FLOAT,
      },
      pt_dis: {
        type: Sequelize.FLOAT,
      },
      pt_fre: {
        type: Sequelize.FLOAT,
      },
      pt_pla: {
        type: Sequelize.FLOAT,
      },
      pt_phi: {
        type: Sequelize.FLOAT,
      },
      pt_soc: {
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
    return queryInterface.dropTable("Usuarios");
  },
};
