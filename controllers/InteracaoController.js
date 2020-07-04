"use strict";

const { Interacao } = require("../models");

class InteracaoController {
  // create = async (data) => {
  //   const interacao = await Interacao.create(data);
  //   // const { id, name, email, password } = Usuario.get();
  //   return interacao;
  // };

  index = async () => {
    const interacoes = await Interacao.findAll();
    let response = [];
    interacoes.forEach((interacao) => response.push(interacao.get()));
    return response;
  };

  // show = async (id) => {
  //   const interacao = await Interacao.findByPk(id);
  //   // let { name, email, password } = Usuario.get();
  //   return interacao;
  // };

  // update = async (id, data) => {
  //   const Usuario = await Usuario.update(
  //     { id, name: data.name, email: data.email, password: data.password },
  //     {
  //       where: {
  //         id,
  //       },
  //     }
  //   );
  //   return Usuario;
  // };

  // destroy = async (id) => {
  //   const interacao = await Interacao.destroy({
  //     where: {
  //       id,
  //     },
  //   });
  //   return interacao;
  // };
}

module.exports = InteracaoController;
