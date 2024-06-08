 export const GameType = () => {
    return (
        <div className="players_number">
            <p>Počet hráčů:</p>
            <div>
                <button className="trenink game_type_button"></button>
                <p>trénink</p>
            </div>
            <div>
                <button className="turnaj game_type_button"></button>
                <p>turnaj</p>
            </div>
        </div>
    )
}