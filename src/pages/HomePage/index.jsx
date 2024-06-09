import "./style.css";
import { GameType } from "../../components/GameType/index.jsx";
import { Player } from "../../components/Player/index.jsx";
import { useState } from "react";
import { IconButton } from "../../components/IconButton/index.jsx";
import { usePlayers } from "../../PlayersContext.jsx";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [player1, setPlayer1] = useState({
    playerName: "Hráč 1",
    playerAvatar: "1",
  });
  const [player2, setPlayer2] = useState({
    playerName: "Hráč 2",
    playerAvatar: "1",
  });
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [avatar1, setAvatar1] = useState("");
  const [avatar2, setAvatar2] = useState("");

  const { setPlayers } = usePlayers();
  const { gameState, setGameState } = usePlayers();
  const navigate = useNavigate();
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    setPlayers([player1, player2]);
    navigate("/game");
  };

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
            selectedGameType={(type) => setGameState(type)}
            deleteName1={setName1}
            deleteName2={setName2}
            deleteAvatar2={setAvatar2}
            deleteAvatar1={setAvatar1}
          ></GameType>
          <Player
            defaultPlaceholder="Hráč 1"
            avatar={avatar1}
            setAvatar={setAvatar1}
            disabled={false}
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
                playerAvatar: avatar.slice(4),
              }))
            }
          ></Player>
          <Player
            defaultPlaceholder="Hráč 2"
            avatar={avatar2}
            setAvatar={setAvatar2}
            name={name2}
            setName={setName2}
            disabled={gameState === "training" ? true : false}
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
                playerAvatar: avatar.slice(4),
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
