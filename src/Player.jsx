import Players from "./Players"

const Player = (Players)=>{
    
    return  (
        <>
        <div className="all" >
            
        <img src={Players.image} alt=""  />
        <h1 > {Players.Name}</h1>
        <p>{Players.age}</p>
        <p> {Players.team}</p>
        <p> {Players.JerseyNumber}</p>
        <p> {Players.Nationality}</p>
        </div>
        
        </>
      
    )
}
Player.defaultProps = {
    Name: "Unknown",
    age: "unkown",
    nationality: "Unknown",
    team:"Unkown"

   };
export default Player