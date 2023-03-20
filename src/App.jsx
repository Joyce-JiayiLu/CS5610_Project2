import NavBar from "./component/NavBar.jsx";
import * as React from "react";
import DifficultyDialog from "./component/DifficultyDialog.jsx";
import { Link } from "react-router-dom";
import "./style/App.css";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.clear();
  };
  return (
    <div>
      <NavBar />
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">CS 5610</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Wordle Game
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Welcome to the world most interesting game, player!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleClickOpen}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start
            </button>
            <Link to="rule" className="text-sm font-semibold text-gray-900">
              See Rules <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>

      <DifficultyDialog
        message={"Welcome! Please Choose Difficulty"}
        open={open}
        onClose={handleClose}
        onCloseOrNot={handleClose}
        difficulty={"main_page"}
      />
    </div>
  );
}

export default App;
