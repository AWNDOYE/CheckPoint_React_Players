import React from "react";
import PlayersList from './Components/PlayersList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
    <h1 style={{textAlign:"center", color:"burlywood"}}>LISTE DES JOUEURS</h1>
    <PlayersList/>
      {/* <Players />
      {player.map((ply) => (
        <Players key={ply.id} {...ply} />
      ))} */}
    </div>
  );
}
export default App;
