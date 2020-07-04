import React from "react";
import Draggable from "react-draggable";

// MATERIAL UI COMPONENTS
import {
  Button,
  Dialog,
  DialogActions,
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

  // function that runs when the dialog is suposed to close
  const handleClose = () => {
    setDialog(false);
  };

  const handleButton = () => {
    props.delete();
    setDialog(false);
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
          {"Tem certeza que deseja deletar?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleButton} variant="contained" color="secondary">
            {`Sim`}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
