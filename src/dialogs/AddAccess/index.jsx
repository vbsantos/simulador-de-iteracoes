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

  const [acessos, setAcessos] = useState("");
  const [interacoes, setInteracoes] = useState("");

  // function that runs when the dialog is suposed to close
  const handleClose = () => {
    setDialog(false);
  };

  // function that runs when you click the right button
  const handleButton = async () => {
    const formNumberValues = [acessos, interacoes];
    const formValuesAreValid =
      formNumberValues.find((field) => isNaN(field)) === undefined;
    if (formValuesAreValid) {
      props.insert(acessos, interacoes);
      setDialog(false);
    }
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
          {"Inserir Acessos"}
        </DialogTitle>

        <DialogContent>
          <form>
            <section className="inline3">
              <p>Defina o número de acessos:</p>
              <input
                placeholder={"0..99"}
                value={acessos}
                onChange={(e) => setAcessos(e.target.value)}
                autoFocus
              ></input>
            </section>

            <section className="inline3">
              <p>Máximo de interações por acesso:</p>
              <input
                placeholder={"0..99"}
                value={interacoes}
                onChange={(e) => setInteracoes(e.target.value)}
              ></input>
            </section>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleButton} variant="contained" color="primary">
            {`Inserir`}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
