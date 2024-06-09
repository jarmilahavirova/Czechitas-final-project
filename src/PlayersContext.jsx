import { createContext, useContext, useState } from "react";

export const PlayersContext = createContext();

export const usePlayers = () => useContext(PlayersContext);

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};
