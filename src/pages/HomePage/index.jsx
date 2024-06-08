import "./style.css";
import { GameType } from "../../components/GameType/index.jsx";
import { Player } from "../../components/Player/index.jsx";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { IconButton } from "../../components/IconButton/index.jsx";

export const HomePage = () => {
  const [selectedGameType, setSelectedGameType] = useState("");

  return (
    <>
    <h1>RULES OPEN 2024</h1>
      <div className="container">
        
        <div>
          <p>
            Vítejte na turnaji Rules Open 2024, kde místo vašich schopností
            hodit co nejdál nebo co nejpřesněji otestujete vaši znalost
            pravidel.
          </p>

          <GameType
            selectedGameType={(type) => setSelectedGameType(type)}
          ></GameType>
          <Player playersNumber={1}></Player>
          <Player
            disabled={selectedGameType === "training" ? true : false}
            playersNumber={2}
          ></Player>
          <div className="menu_buttons">
            <IconButton icon="./icon-info.png" link="/about"/>
            <IconButton type="button" selected icon="./icon-disgolf.png"/>
            
          </div>
        </div>
      </div>
    </>
  );
};
