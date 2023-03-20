import Row from "./Row.jsx";
import { useContext, useEffect } from "react";
import { AppContext } from "../pages/Game.jsx";

function Board() {
  const { difficulty } = useContext(AppContext);
  let boardLength;
  if (difficulty === "hard") {
    boardLength = [0, 1, 2, 3, 4];
  } else {
    boardLength = [0, 1, 2, 3, 4, 5];
  }

  return (
    <div className="board">
      {boardLength.map((value) => (
        <Row value={value} />
      ))}
    </div>
  );
}
export default Board;
