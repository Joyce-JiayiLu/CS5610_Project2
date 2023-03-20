import Letter from "./Letter.jsx";
import { useContext } from "react";
import { AppContext } from "../pages/Game.jsx";

function Row({ value }) {
  const { difficulty } = useContext(AppContext);
  let wordLength;

  if (difficulty === "hard") {
    wordLength = [0, 1, 2, 3, 4, 5, 6];
  } else {
    wordLength = [0, 1, 2, 3, 4, 5];
  }

  return (
    <div className="row">
      {wordLength.map((position) => (
        <Letter Position={position} Value={value} />
      ))}
    </div>
  );
}

export default Row;
