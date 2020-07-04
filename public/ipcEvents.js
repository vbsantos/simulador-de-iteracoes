// React Event Handlers

const { ipcMain } = require("electron");

const databaseController = require("../controllers/DatabaseController");
const Database = new databaseController();

ipcMain.handle("database", async (event, arg) => {
  const { method, content } = arg;
  let status;
  try {
    switch (method) {
      case "migrations":
        console.log("entrada:", arg);
        status = await Database.runMigrations();
        console.log("saida:", status);
        break;
      default:
        console.log({ error: "This method do not exist." });
    }
    return status;
  } catch (error) {
    return { error };
  }
});

const usuarioController = require("../controllers/UsuarioController");
const Usuario = new usuarioController();

ipcMain.handle("usuarios", async (event, arg) => {
  const { method, content } = arg;
  let status;
  try {
    switch (method) {
      case "index":
        console.log("entrada:", arg);
        status = await Usuario.index();
        console.log("saida:", status);
        break;
      case "create":
        console.log("entrada:", arg);
        status = await Usuario.create(content);
        console.log("saida:", status);
        break;
      case "delete":
        console.log("entrada:", arg);
        status = await Usuario.destroy(content);
        console.log("saida:", status);
        break;
      default:
        console.log({ error: "Method do not exists." });
    }
    return status;
  } catch (error) {
    return { error };
  }
});

const interacaoController = require("../controllers/InteracaoController");
const Interacao = new interacaoController();

ipcMain.handle("interacoes", async (event, arg) => {
  const { method, content } = arg;
  let status;
  try {
    switch (method) {
      case "index":
        console.log("entrada:", arg);
        status = await Interacao.index();
        console.log("saida:", status);
        break;
      // case "show":
      //   console.log("entrada:", arg);
      //   status = await Interacao.show(content.id);
      //   console.log("saida:", status);
      //   break;
      default:
        console.log({ error: "Method do not exists." });
    }
    return status;
  } catch (error) {
    return { error };
  }
});

const usuarioInteracaoController = require("../controllers/UsuarioInteracaoController");
const UsuarioInteracao = new usuarioInteracaoController();

ipcMain.handle("usuario_interacao", async (event, arg) => {
  const { method, content } = arg;
  let status;
  try {
    switch (method) {
      case "index":
        console.log("entrada:", arg);
        status = await UsuarioInteracao.index();
        console.log("saida:", status);
        break;
      case "create":
        console.log("entrada:", arg);
        status = await UsuarioInteracao.create(content);
        console.log("saida:", status);
        break;
      case "deleteAll":
        console.log("entrada:", arg);
        status = await UsuarioInteracao.destroyAll();
        console.log("saida:", status);
        break;
      default:
        console.log({ error: "Method do not exists." });
    }
    return status;
  } catch (error) {
    return { error };
  }
});
