import React, { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import UsersTable from "./components/UsersTable";
import Buttons from "./components/Buttons";

// DIALOGS
import AddUser from "./dialogs/AddUser";
import AddAccess from "./dialogs/AddAccess";
import Confirmation from "./dialogs/Confirmation";

function App() {
  // const [users, setUsers] = useState([
  //   {
  //     id: 0,
  //     name: "a",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 1,
  //     name: "b",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 2,
  //     name: "c",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 3,
  //     name: "d",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 4,
  //     name: "e",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 5,
  //     name: "f",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 6,
  //     name: "g",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 7,
  //     name: "h",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 8,
  //     name: "i",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 9,
  //     name: "j",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 10,
  //     name: "k",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 11,
  //     name: "l",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 12,
  //     name: "m",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 13,
  //     name: "n",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 14,
  //     name: "o",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 15,
  //     name: "p",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 16,
  //     name: "q",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 17,
  //     name: "r",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 18,
  //     name: "s",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 19,
  //     name: "t",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  //   {
  //     id: 20,
  //     name: "u",
  //     achiever: parseInt(Math.random() * 99),
  //     disruptor: parseInt(Math.random() * 99),
  //     free: parseInt(Math.random() * 99),
  //     player: parseInt(Math.random() * 99),
  //     philantropist: parseInt(Math.random() * 99),
  //     socializer: parseInt(Math.random() * 99),
  //   },
  // ]);

  const [users, setUsers] = useState([]);
  const [interactions, setInteractions] = useState([]);

  const [selected, setSelected] = useState([]);

  const [userDialogOpen, setUserDialogOpen] = useState(false);
  const [accessDialogOpen, setAccessDialogOpen] = useState(false);
  const [
    deleteConfirmationDialogOpen,
    setDeleteConfirmationDialogOpen,
  ] = useState(false);

  const [finished, setFinished] = useState(0);

  const getUsersList = async () => {
    const res = await window.ipcRenderer.invoke("usuarios", {
      method: "index",
      content: "",
    });
    // console.groupCollapsed("Buscar Usuários");
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd("Buscar Usuários");
    setUsers(res);
    setFinished((old) => old + 1);
  };

  const getInteractionsList = async () => {
    const res = await window.ipcRenderer.invoke("interacoes", {
      method: "index",
      content: "",
    });
    // console.groupCollapsed("Buscar Interações");
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd();
    setInteractions(res);
    setFinished((old) => old + 1);
  };

  useEffect(() => {
    getUsersList();
    getInteractionsList();
  }, []);

  const adicionarUsuario = async (usuario) => {
    const res = await window.ipcRenderer.invoke("usuarios", {
      method: "create",
      content: usuario,
    });
    if (res.id) {
      setUsers((userList) => [...userList, res]);
    }
    // console.groupCollapsed("Adicionar Usuário");
    // console.log("Dados enviados:", usuario);
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd("Adicionar Usuário");
    setFinished((old) => old + 1);
  };

  const getRandomNumber = (limit) => {
    const num = Math.floor(Math.random() * limit);
    return num;
  };

  const getRandomListItens = (list, quantity) => {
    let randomItens = [];
    for (let i = 0; i < quantity; i++) {
      // if (list.length === 0) {
      // return randomItens;
      // }
      const randomIndex = getRandomNumber(list.length);
      randomItens.push(list[randomIndex]);
      // list.splice(randomIndex, 1);
    }
    return randomItens;
  };

  // função principal
  const generateAccesses = (acessos, interacoes) => {
    //acessos é o número de usuários (aleatórios)
    const listUsersId = users.map((user) => user.id);
    // console.log("listUsersId:", listUsersId);
    const randomUsers = getRandomListItens(listUsersId, acessos);
    // console.log("randomUsers", randomUsers);
    const listInteractionsId = interactions.map(
      (interaction) => interaction.id
    );
    // console.log("listInteractionsId:", listInteractionsId);

    let accesses = [];

    for (const user of randomUsers) {
      const randomNumberOfInteractions = getRandomNumber(interacoes);
      const randomInteractions = getRandomListItens(
        listInteractionsId,
        randomNumberOfInteractions
      );
      // console.log(
      // `randomInteractions[${randomNumberOfInteractions}] for user ${user}: ${randomInteractions}`
      // );
      randomInteractions.forEach((int) =>
        accesses.push({
          usuario_id_usuario: user,
          interacao_id_interacao: int,
        })
      );
    }

    // console.log("accesses:", accesses);

    return accesses;
  };

  const insertAccess = async (acessos, interacoes) => {
    // console.groupCollapsed("Inserir Acessos");
    const accessList = generateAccesses(acessos, interacoes);

    const res = await window.ipcRenderer.invoke("usuario_interacao", {
      method: "create",
      content: accessList,
    });

    // console.log("Dados enviados:", { acessos, interacoes });
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd("Inserir Acessos");
    setFinished((old) => old + 1);
  };

  const removerUsuarios = async (list) => {
    const res = await window.ipcRenderer.invoke("usuarios", {
      method: "delete",
      content: list,
    });
    // console.groupCollapsed("Remover Usuários");
    // console.log("Dados enviados:", list);
    console.log("Resposta do banco de dados:", res);
    // console.groupEnd("Remover Usuários");
    setSelected([]);
    getUsersList();
    setFinished((old) => old + 1);
  };

  return (
    <div className="App">
      {userDialogOpen && (
        <AddUser
          open={[userDialogOpen, setUserDialogOpen]}
          register={adicionarUsuario}
        />
      )}
      {accessDialogOpen && (
        <AddAccess
          open={[accessDialogOpen, setAccessDialogOpen]}
          insert={insertAccess}
        />
      )}
      {deleteConfirmationDialogOpen && (
        <Confirmation
          open={[deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen]}
          delete={() => removerUsuarios(selected)}
        />
      )}
      <UsersTable
        title={"Lista de Usuários"}
        select={[selected, setSelected]}
        users={users}
        interactions={interactions}
        redraw={finished}
      />
      <Buttons
        func1={["Adicionar Usuários", true, () => setUserDialogOpen(true)]}
        func2={["Inserir Acessos", true, () => setAccessDialogOpen(true)]}
        func3={[
          `Excluir ${selected.length === 1 ? "Usuário" : "Usuários"}`,
          selected.length > 0,
          () => setDeleteConfirmationDialogOpen(true),
        ]}
      />
    </div>
  );
}

export default App;
