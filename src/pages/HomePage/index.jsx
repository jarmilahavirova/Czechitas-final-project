import "./style.css";
import { GameType } from "../../components/GameType/index.jsx";
import { Player } from "../../components/Player/index.jsx";
import { useState } from "react";
import { IconButton } from "../../components/IconButton/index.jsx";
import { usePlayers } from "../../PlayersContext.jsx";

export const HomePage = () => {
  const [selectedGameType, setSelectedGameType] = useState("");
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const { players, setPlayers } = usePlayers();
  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    setPlayers([player1, player2]);
  };

  console.log(players);

  return (
    <>
      <h1>RULES OPEN 2024</h1>
      <div className="container">
        <form onSubmit={handleSubmitForm}>
          <p>
            Vítejte na turnaji Rules Open 2024, kde místo vašich schopností
            hodit co nejdál nebo co nejpřesněji otestujete vaši znalost
            pravidel.
          </p>

          <GameType
            selectedGameType={(type) => setSelectedGameType(type)}
            deleteName1={setName1}
            deleteName2={setName2}
          ></GameType>
          <Player
            name={name1}
            setName={setName1}
            playersNumber={1}
            selectedName={(name) =>
              setPlayer1((prevState) => ({
                ...prevState,
                playerName: name,
              }))
            }
            selectedAvatar={(avatar) =>
              setPlayer1((prevState) => ({
                ...prevState,
                playerAvatar: avatar,
              }))
            }
          ></Player>
          <Player
            name={name2}
            setName={setName2}
            disabled={selectedGameType === "training" ? true : false}
            playersNumber={2}
            selectedName={(name) =>
              setPlayer2((prevState) => ({
                ...prevState,
                playerName: name,
              }))
            }
            selectedAvatar={(avatar) =>
              setPlayer2((prevState) => ({
                ...prevState,
                playerAvatar: avatar,
              }))
            }
          ></Player>
          <div className="menu_buttons">
            <IconButton type="link" icon="./icon-info.png" link="/about" />
            <IconButton type="submit" selected icon="./icon-disgolf.png" />
          </div>
        </form>
      </div>
    </>
  );
};
