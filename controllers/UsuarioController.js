"use strict";

const { Usuario } = require("../models");

class UsuarioController {
  create = async (data) => {
    const usuario = await Usuario.create(data);
    return usuario.get();
  };

  index = async () => {
    const usuarios = await Usuario.findAll();
    let response = [];
    usuarios.forEach((usuario) => {
      response.push(usuario.get());
    });
    return response;
  };

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

  destroy = async (ids) => {
    const res = [];
    for (const id of ids) {
      const deleted = await Usuario.destroy({
        where: {
          id,
        },
      });
      res.push(deleted);
    }
    return res;
  };
}

module.exports = UsuarioController;
