import "./style.css";
import { GameType } from "../../components/GameType/index.jsx";
import { Player } from "../../components/Player/index.jsx";
import { useState } from "react";

export const HomePage = () => {
  const [selectedGameType, setSelectedGameType] = useState("")
  
  return (
    <>
      <h1>RULES OPEN 2024</h1>
      <div>
        <p>
          Vítejte na turnaji Rules Open 2024, kde místo vašich schopností hodit
          co nejdál nebo co nejpřesněji otestujete vaši znalost pravidel.
        </p>

        <GameType selectedGameType={(type) => setSelectedGameType(type)}></GameType>
        <Player playersNumber={1} ></Player>
        <Player disabled={selectedGameType==="training"? true: false} playersNumber={2} ></Player>   
        <div className="menu_buttons">
          <button>i</button>
          <button>play</button>
        </div>
      </div>
    </>
  );
};
