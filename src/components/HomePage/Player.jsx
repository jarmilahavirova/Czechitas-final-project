import head1 from "../../../assets/head1.png"
import head2 from "../../../assets/head2.png"
import head3 from "../../../assets/head3.png"
import head4 from "../../../assets/head4.png"

export const Player = ({playersNumber}) => {
    return (
        <div className="player">
            <p>Hráč {playersNumber}</p>
            <div>
                <img src={head1} alt="" />
                <img src={head2} alt=""/>
                <img src={head3} alt=""/>
                <img src={head4} alt=""/>
                <input></input>
            </div>
        </div>
    )
}