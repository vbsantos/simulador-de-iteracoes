"use strict";
module.exports = (sequelize, DataTypes) => {
  const Interacao = sequelize.define(
    "Interacao",
    {
      frequencia: DataTypes.STRING,
      int_minimas: DataTypes.INTEGER,
      peso_ach: DataTypes.FLOAT,
      peso_dis: DataTypes.FLOAT,
      peso_fre: DataTypes.FLOAT,
      peso_pla: DataTypes.FLOAT,
      peso_phi: DataTypes.FLOAT,
      peso_soc: DataTypes.FLOAT,
    },
    {}
  );
  Interacao.associate = function (models) {
    // Interacao.belongsToMany(models.Usuario, { through: "Usuario_Interacao" }); // REVIEW relationship
  };
  return Interacao;
};
