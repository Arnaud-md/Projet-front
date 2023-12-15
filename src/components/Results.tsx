import cup_argent from "../img/coupe_argent.jpg"
const Results = () => {
    const isconnect = localStorage.getItem("isconnected");
    return (
        <div>
                      {isconnect==="true" ? 
                    <div className="connect_info">
                        <div className="light"></div>
                        <p className="connect">Connecté</p>
                    </div> :
                    <div className="connect_info">
                        <div className="light_off"></div>
                        <p className="connect">Non connecté</p>
                    </div>
                }
            <div className="display_column">
                <div className="title">
                <h1>Résultats</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    <p className="result_size">Vous avez 8 bonnes réponses au QCM d'informatique</p>
                    <div className="result_cup">
                        <img src={cup_argent} className="img_cup_info_result"></img>
                    </div>
                    <p className="result_size">Rang Argent</p>
                    <p className="result_size"></p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button className={"button_purple bord_right"}>Valider</button>
            </div>
        </div> 
    );
};

export default Results;