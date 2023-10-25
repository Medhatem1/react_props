import Player from "./Player"
import Players from "./Players"

const PlayerList=()=>{
    return (
       <div className="wow">
         {Players.map( player => (
            <Player {...player} />
             ))}
       </div>
    )

          
             
}
export default PlayerList