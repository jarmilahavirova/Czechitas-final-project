import { useState } from "react";
import { AvatarAside } from "../../components/AvatarAside";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { Quiz } from "../../components/Quiz";
import { ScoreCard } from "../../components/Scorecard";
import "./style.css";

export const GamePage = ({
  player1 = "Isaac",
  player2 = "Kristin",
  avatar1 = 2,
  avatar2 = 3,
}) => {
  const [playing, setPlaying] = useState(true);

  return (
    <main className="game">
      <AvatarAside playerName={player1} avatar={avatar1} side={"left"} />
      <div className="game__middle-section">
        <Header />
        {playing ? <Quiz /> : <Map />}
        <ScoreCard />
      </div>
      <AvatarAside playerName={player2} avatar={avatar2} side={"right"} />
    </main>
  );
};
