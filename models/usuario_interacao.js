"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario_Interacao = sequelize.define(
    "Usuario_Interacao",
    {
      usuario_id_usuario: DataTypes.INTEGER, // REVIEW FK
      interacao_id_interacao: DataTypes.INTEGER, // REVIEW FK
    },
    {}
  );
  Usuario_Interacao.associate = function (models) {
    // associations can be defined here
  };
  return Usuario_Interacao;
};
