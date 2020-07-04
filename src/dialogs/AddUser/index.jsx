import React, { useState } from "react";
import Draggable from "react-draggable";

// MATERIAL UI COMPONENTS
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@material-ui/core";

// CSS
import "./style.css";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [dialog, setDialog] = props.open;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [genero, setGenero] = useState("");
  const [perfil1, setPerfil1] = useState("");
  const [perfil2, setPerfil2] = useState("");
  const [perfil3, setPerfil3] = useState("");
  const [perfil4, setPerfil4] = useState("");
  const [perfil5, setPerfil5] = useState("");
  const [perfil6, setPerfil6] = useState("");

  // function that runs when the dialog is suposed to close
  const handleClose = () => {
    setDialog(false);
  };

  // function that runs when you click the right button
  const handleButton = async () => {
    const formValues = [
      nome,
      email,
      data,
      genero,
      perfil1,
      perfil2,
      perfil3,
      perfil4,
      perfil5,
      perfil6,
    ];

    const formNumberValues = [
      perfil1,
      perfil2,
      perfil3,
      perfil4,
      perfil5,
      perfil6,
    ];

    const formValuesAreValid =
      formValues.find((field) => field === "") === undefined &&
      formNumberValues.find((field) => isNaN(field)) === undefined;

    if (formValuesAreValid) {
      const usuario = {
        nome: nome,
        email: email,
        data_nasc: data,
        genero: genero,
        pt_ach: Number(perfil1),
        pt_dis: Number(perfil2),
        pt_fre: Number(perfil3),
        pt_pla: Number(perfil4),
        pt_phi: Number(perfil5),
        pt_soc: Number(perfil6),
      };
      props.register(usuario); // register new user
      setDialog(false); // close window
    }
  };

  const setPerfis = () => {
    const limit = 28;
    setPerfil1((Math.random() * limit).toFixed(0));
    setPerfil2((Math.random() * limit).toFixed(0));
    setPerfil3((Math.random() * limit).toFixed(0));
    setPerfil4((Math.random() * limit).toFixed(0));
    setPerfil5((Math.random() * limit).toFixed(0));
    setPerfil6((Math.random() * limit).toFixed(0));
  };

  return (
    <div id="AddUserDialogComponent">
      <Dialog
        open={dialog}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          align={"center"}
          id="draggable-dialog-title"
          color="inherit"
        >
          {"Adicionar Usuários"}
        </DialogTitle>

        <DialogContent>
          <form>
            <section className="inline1">
              <p>Nome:</p>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                autoFocus
              ></input>
            </section>

            <section className="inline1">
              <p>Email:</p>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </section>

            <section className="inline1">
              <p>Data de Nascimento:</p>

              <input
                value={data}
                onChange={(e) => setData(e.target.value)}
              ></input>
            </section>

            <section className="inline1">
              <p>Gênero:</p>

              <input
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              ></input>
            </section>

            <section className="inline2">
              <p>
                {`Perfis de Jogador:  `}
                <span onClick={setPerfis}>aleatório</span>
              </p>
            </section>

            <section className="inline2">
              <input
                value={perfil1}
                onChange={(e) => setPerfil1(e.target.value)}
                placeholder={"ACH"}
              ></input>
              <input
                value={perfil2}
                onChange={(e) => setPerfil2(e.target.value)}
                placeholder={"DIS"}
              ></input>
              <input
                value={perfil3}
                onChange={(e) => setPerfil3(e.target.value)}
                placeholder={"FRE"}
              ></input>
              <input
                value={perfil4}
                onChange={(e) => setPerfil4(e.target.value)}
                placeholder={"PLA"}
              ></input>
              <input
                value={perfil5}
                onChange={(e) => setPerfil5(e.target.value)}
                placeholder={"PHI"}
              ></input>
              <input
                value={perfil6}
                onChange={(e) => setPerfil6(e.target.value)}
                placeholder={"SOC"}
              ></input>
            </section>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleButton} variant="contained" color="primary">
            {`Adicionar`}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
