import "./style.css"
 
 export const GameType = () => {
  
    
    return (
        <div className="players_number">
            <p>Počet hráčů:</p>
            <div>
                <button className="training game_type_button"></button>
                <p>trénink</p>
            </div>
            <div>
                <button className="tournament game_type_button"></button>
                <p>turnaj</p>
            </div>
        </div>
    )


}