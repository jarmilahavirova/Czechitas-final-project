import { IconButton } from "../IconButton";
import "./style.css";
import { useState } from "react";

export const GameType = ({
  selectedGameType,
  deleteName1,
  deleteName2,
  deleteAvatar2,
}) => {
  const [gameType, setGameType] = useState("training");

  const handleSelectGameType = (type) => {
    selectedGameType(type);
    setGameType(type);
    deleteName1("");
    deleteName2("");
    if (type === "training") {
      deleteAvatar2("");
    }
  };

  return (
    <div className="players_number">
      <p className="players_number_text">Počet hráčů:</p>
      <div className="players_number_button">
        <IconButton
          type="button"
          text="trénink"
          icon="./icon-person.png"
          selected={gameType === "training"}
          onClick={() => handleSelectGameType("training")}
        />
        <IconButton
          type="button"
          text="turnaj"
          icon="./icon-people.png"
          selected={gameType === "tournament"}
          onClick={() => handleSelectGameType("tournament")}
        />
      </div>
    </div>
  );
};
