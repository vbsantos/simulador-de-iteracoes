"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      data_nasc: DataTypes.STRING,
      genero: DataTypes.STRING,
      pt_ach: DataTypes.FLOAT,
      pt_dis: DataTypes.FLOAT,
      pt_fre: DataTypes.FLOAT,
      pt_pla: DataTypes.FLOAT,
      pt_phi: DataTypes.FLOAT,
      pt_soc: DataTypes.FLOAT,
    },
    {}
  );
  Usuario.associate = function (models) {
    // Usuario.belongsToMany(models.Interacao, { through: "Usuario_Interacao" }); // REVIEW relationship
  };
  return Usuario;
};
