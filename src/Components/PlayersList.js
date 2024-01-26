import React from "react";
import Players from './Players'
import player from '../player'
import 'bootstrap/dist/css/bootstrap.min.css';
//Fonction PlayerList pour parcourir le tableau d'objet
function PlayersList(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", margin:"20px", rowGap:"15px"}}>
          {/* <Players /> */}
          {player.map((ply) => (
            //Nous passons en props au composant Players chaque joueur du tableau
            <Players key={ply.id} {...ply} />
          ))}
        </div>
      );
}
export default PlayersList;