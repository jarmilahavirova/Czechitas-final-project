import "./style.css";
import { GameType } from "../../components/GameType/index.jsx";
import { Player } from "../../components/Player/index.jsx";



export const HomePage = () => {
  return (
  <>
  <h1>RULES OPEN 2024</h1>
  <div>
      <p>Vítejte na turnaji Rules Open 2024, kde místo vašich schopností hodit co nejdál nebo co nejpřesněji otestujete vaši znalost pravidel.</p>
        
      <GameType></GameType>
      <Player playersNumber={1}></Player> 
      <Player playersNumber={2}></Player>
       
        <div className="menu_buttons">
            <button>i</button>
            <button>play</button>
        </div>
  </div>
</>)
};
