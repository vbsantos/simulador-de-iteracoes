"use strict";

const { Usuario_Interacao } = require("../models");

class UsuarioInteracaoController {
  create = async (datas) => {
    const res = [];
    for (const data of datas) {
      const access = await Usuario_Interacao.create(data);
      res.push(access.get());
    }
    return res;
  };

  index = async () => {
    const usuario_interacoes = await Usuario_Interacao.findAll();
    const res = [];
    for (const usuario_interacao of usuario_interacoes) {
      res.push(usuario_interacao.get());
    }
    return res;
  };

  show = async (id) => {
    const usuario_interacao = await Usuario_Interacao.findByPk(id);
    return usuario_interacao;
  };

  destroyAll = async () => {
    const usuario_interacao = await Usuario_Interacao.destroy(); //REVIEW ver se realmente deleta todos os registros da tabela
    return usuario_interacao;
  };
}

module.exports = UsuarioInteracaoController;
