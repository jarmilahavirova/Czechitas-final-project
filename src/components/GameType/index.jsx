import { IconButton } from "../IconButton";
import "./style.css";
import { useState } from "react";

export const GameType = () => {
  const [gameType, setGameType] = useState("training");

  return (
    <div className="players_number">
      <p>Počet hráčů:</p>
      <IconButton
        text="trénink"
        icon="./icon-person.png"
        selected={gameType === "training"}
        onClick={() => setGameType("training")}
      />
      <IconButton
        text="turnaj"
        icon="./icon-people.png"
        selected={gameType === "tournament"}
        onClick={() => setGameType("tournament")}
      />
    </div>
  );
};
