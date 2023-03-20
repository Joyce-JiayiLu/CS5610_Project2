import NavBar from "../component/NavBar.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import wordListNormal from "../data/wordListNormal.txt";
import wordListHard from "../data/wordListHard.txt";
import { createContext } from "react";
import Board from "../component/Board.jsx";
import Prompt from "../component/Prompt.jsx";
import { normalBoard, hardBoard } from "../constant/defaultBoard.js";
import { Alert, Snackbar } from "@mui/material";
import DifficultyDialog from "../component/DifficultyDialog.jsx";
import * as React from "react";

export const AppContext = createContext();

//browser storage

function Game() {
  let { difficulty } = useParams();
  let isNormal = difficulty === "normal";
  const [count, setCount] = useState(0);
  const [solution, setSolution] = useState("");
  const [board, setBoard] = useState(isNormal ? normalBoard : hardBoard);
  const [input, setInput] = useState("");
  const [currRow, setCurrRow] = useState(0);
  const [wordCheckList, setWordCheckList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const englishRegex = /^[A-Za-z]+$/;
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  // useEffect(() => {
  //   setWordList(isNormal ? wordListNormal : wordListHard);
  //   setGameOver(false);
  //   setCurrRow(0);
  //   setInput("");
  //
  //   let brandNewBoard = [...board];
  //   for (let i = 0; i < brandNewBoard.length; i++) {
  //     brandNewBoard[i] = isNormal ? normalBoard[i] : hardBoard[i];
  //   }
  //   setBoard(brandNewBoard);
  //   console.log("board", board);
  //   fetch(isNormal ? wordListNormal : wordListHard)
  //     .then((r) => r.text())
  //     .then((data) => {
  //       const newWordList = data.split("\n");
  //       const randomIndex = Math.floor(Math.random() * newWordList.length);
  //       setSolution(newWordList[randomIndex]);
  //       setWordCheckList(newWordList);
  //     });
  // }, [count]);

  useEffect(() => {
    const storeBoard = JSON.parse(localStorage.getItem("board"));
    const row = JSON.parse(localStorage.getItem("currRow"));
    const storeSolution = JSON.parse(localStorage.getItem("solution"));
    const storeWordCheckList = JSON.parse(
      localStorage.getItem("wordCheckList")
    );
    if (storeBoard && row && storeSolution && storeWordCheckList) {
      setBoard(storeBoard);
      setCurrRow(row);
      setSolution(storeSolution);
      setWordCheckList(storeWordCheckList);
    } else {
      fetch(isNormal ? wordListNormal : wordListHard)
        .then((r) => r.text())
        .then((data) => {
          const newWordList = data.split("\n");
          const randomIndex = Math.floor(Math.random() * newWordList.length);
          setSolution(newWordList[randomIndex]);
          localStorage.setItem(
            "solution",
            JSON.stringify(newWordList[randomIndex])
          );
          setWordCheckList(newWordList);
          localStorage.setItem("wordCheckList", JSON.stringify(newWordList));
        });
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNotClose = () => {
    setOpen(true);
  };

  function onSubmit() {
    let inputLengthCheck = isNormal ? 6 : 7;
    if (gameOver) {
      setAlertContent("Game Over! Please reload the game!");
      setAlert(true);
      setInput("");
    } else if (!englishRegex.test(input)) {
      setAlertContent("Please enter the valid English character!");
      setAlert(true);
      setInput("");
    } else if (input.length !== inputLengthCheck) {
      setAlertContent(`Word length should be ${inputLengthCheck}!`);
      setAlert(true);
      setInput("");
    } else if (!wordCheckList.includes(input.toLowerCase())) {
      setAlertContent("Not a valid word!");
      setAlert(true);
      setInput("");
    } else if (!gameOver) {
      flipRow();
      checkComplete();
      setInput("");
    }
  }

  function checkComplete() {
    if (solution === input.toLowerCase()) {
      setGameOver(true);
      setMessage("Congratulations! Would you like to try again?");
      localStorage.clear();
      setTimeout(() => {
        setOpen(true);
      }, 900);
    } else if (currRow === board.length - 1) {
      setGameOver(true);
      setMessage("You Lose! Would you like to try again?");
      localStorage.clear();
      setTimeout(() => {
        setOpen(true);
      }, 400);
    }
  }

  // show letters in the row
  function flipRow() {
    const solutionMap = new Map();
    for (let i = 0; i < solution.length; i++) {
      if (solutionMap.has(solution[i])) {
        solutionMap.set(solution[i], solutionMap.get(solution[i]) + 1);
      } else {
        solutionMap.set(solution[i], 1);
      }
    }

    if (currRow < board.length) {
      const newBoard = [...board];
      for (let i = 0; i < board[currRow].length; i++) {
        let lowerCaseInput = input[i].toLowerCase();
        newBoard[currRow][i].char = lowerCaseInput;
        if (solution[i] === lowerCaseInput) {
          newBoard[currRow][i].status = "right";
          solutionMap.set(lowerCaseInput, solutionMap.get(lowerCaseInput) - 1);
        }
      }
      for (let i = 0; i < board[currRow].length; i++) {
        let lowerCaseInput = input[i].toLowerCase();
        if (
          newBoard[currRow][i].status !== "right" &&
          solutionMap.has(lowerCaseInput) &&
          solutionMap.get(lowerCaseInput) > 0
        ) {
          newBoard[currRow][i].status = "almost";
          solutionMap.set(lowerCaseInput, solutionMap.get(lowerCaseInput) - 1);
        } else if (newBoard[currRow][i].status !== "right") {
          newBoard[currRow][i].status = "wrong";
        }
      }
      setBoard(newBoard);
      let row = currRow + 1;
      setCurrRow(row);
      localStorage.setItem("board", JSON.stringify(board));
      localStorage.setItem("currRow", JSON.stringify(row));
    }
  }

  return (
    <>
      <NavBar difficulty={difficulty} />
      <div className="game">
        <Snackbar
          // define location
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={alert}
          onClose={() => setAlert(false)}
          // after 2 seconds it will automatically close
          autoHideDuration={1500}
          className="custom-snackbar"
        >
          <Alert severity="warning">{alertContent}</Alert>
        </Snackbar>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            input,
            setInput,
            onSubmit,
            solution,
            difficulty,
            count,
            setCount,
          }}
        >
          <Board />
          <Prompt />
          <DifficultyDialog
            message={message}
            open={open}
            onClose={handleClose}
            onCloseOrNot={handleNotClose}
            difficulty={difficulty}
          />
          <p className="text-base font-semibold text-indigo-600">
            Solution: {solution}
          </p>
          <p className="text-base font-semi text-indigo-300">
            (Provided for debug purposes only)
          </p>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default Game;
