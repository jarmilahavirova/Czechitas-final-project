import { createContext, useContext, useState } from "react";

export const PlayersContext = createContext();

export const usePlayers = () => useContext(PlayersContext);

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState("");

  return (
    <PlayersContext.Provider
      value={{ players, setPlayers, gameState, setGameState }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
