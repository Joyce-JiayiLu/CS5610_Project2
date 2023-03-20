import { useContext, useState } from "react";
import { AppContext } from "../pages/Game.jsx";
function Letter({ Position, Value }) {
  const { board } = useContext(AppContext);

  if (board[Value] && board[Value][Position]) {
    let letter = board[Value][Position].char;
    let letterStatus = board[Value][Position].status;
    return <div className={`letter ${letterStatus}`}>{letter}</div>;
  } else {
    return <> </>;
  }
}

export default Letter;
