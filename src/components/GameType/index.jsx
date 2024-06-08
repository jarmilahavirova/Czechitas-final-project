import { IconButton } from "../IconButton";
import "./style.css";

export const GameType = () => {
  return (
    <div className="players_number">
      <p>Počet hráčů:</p>
      <IconButton text="trénink" icon="./icon-person.png" selected={false} />
      <div>
        <button className="tournament game_type_button"></button>
        <p>turnaj</p>
      </div>
    </div>
  );
};
