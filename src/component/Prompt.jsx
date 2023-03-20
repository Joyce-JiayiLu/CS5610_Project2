import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AppContext } from "../pages/Game.jsx";
import * as React from "react";
import DifficultyDialog from "./DifficultyDialog.jsx";

function Prompt() {
  let { input, setInput, onSubmit, difficulty, count, setCount } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.clear();
  };

  const handleCloseOrNot = () => {
    setOpen(false);
  }

  return (
    <div className="prompt">
      <TextField
        id="outlined-basic"
        label="Word"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className="try-button"
        variant="contained"
        color="success"
        onClick={onSubmit}
      >
        Enter
      </Button>
      <Button
        className="reload-button"
        variant="contained"
        color="warning"
        onClick={handleClickOpen}
      >
        Reload
      </Button>
      <DifficultyDialog
        message={"You sure? The game will not be saved."}
        open={open}
        onClose={handleClose}
        onCloseOrNot={handleCloseOrNot}
        difficulty={difficulty}
      />
    </div>
  );
}

export default Prompt;
