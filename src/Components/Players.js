import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//Fonction Players qui reçoit en argument une props (objet joueur)
function Players(props) {
    //Destructuration de l'objet props et stockage des attributs de l'objet dans une const
    //Définition de la valeur par défaut des attributs du props
    const { nom ="Nom du joureur", age="Age du joureur", imageJoueur ="Image du joureur", numéroMaillot ="N° du joureur", nationalité ="Nationalité du joureur", equipe="Equipe du joureur" } = props
    return (
        <div>
        {/*Chaque attribut récupéré est affiché dans une balise html + définition du style de la balsie*/}
            <div className="card" style={{ width: "20rem",border: '1px solid #000',borderRadius:"5px" }}>
                <div className="card-body" style={{textAlign:"center"}}>
                    <h3 className="card-title" style={{padding:"20px"}}>{nom}</h3>
                    <h6 className="card-text"><strong>Equipe : </strong>{equipe}</h6>
                    <p className="card-text"><strong>Nationalité :</strong> {nationalité}</p>
                    <p className="card-text"><strong>N° Maillot : </strong>{numéroMaillot}</p>
                    <p className="card-text"><strong>Age : </strong>{age}</p>                    
                </div>
                <img src={imageJoueur} className="card-img-top" alt="..." style={{ width: "20rem", height:"15rem", borderRadius:"2px" }} />
            </div>
        </div>
    );
};
export default Players