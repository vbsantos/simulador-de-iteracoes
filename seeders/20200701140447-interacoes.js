"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const actualDate = new Date();
    return queryInterface.bulkInsert(
      "Interacaos",
      [
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0.2,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.2,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 1,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.2,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 1,
          peso_dis: 0.2,
          peso_fre: 1,
          peso_pla: 0,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 1,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.7,
          peso_dis: 0,
          peso_fre: 0.5,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 0.2,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.2,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 1,
          peso_dis: 0.2,
          peso_fre: 1,
          peso_pla: 0,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 1,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0,
          peso_dis: 0,
          peso_fre: 0.2,
          peso_pla: 0.2,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0.2,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0.2,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 0.2,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 1,
          peso_dis: 0.2,
          peso_fre: 0.5,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0.2,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.2,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0.2,
          peso_pla: 0.4,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 1,
          peso_dis: 0.2,
          peso_fre: 1,
          peso_pla: 0,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "rara",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0.2,
          peso_pla: 0.4,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0.5,
          peso_pla: 1,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.7,
          peso_dis: 0,
          peso_fre: 0.5,
          peso_pla: 0,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0.2,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0.2,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0.2,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 0.2,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.2,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0,
          peso_phi: 1,
          peso_soc: 0.5,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "comum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.5,
          peso_phi: 0,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 1,
          peso_dis: 0.2,
          peso_fre: 1,
          peso_pla: 0,
          peso_phi: 0.2,
          peso_soc: 0,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
        {
          frequencia: "incomum",
          int_minimas: getRandomInt(4),
          peso_ach: 0.5,
          peso_dis: 0,
          peso_fre: 0,
          peso_pla: 0.7,
          peso_phi: 0.2,
          peso_soc: 1,
          createdAt: actualDate,
          updatedAt: actualDate,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Interacaos", null, {});
  },
};
