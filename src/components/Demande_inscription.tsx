import cup_argent from "../img/coupe_argent.jpg"
const Demande_inscription = () => {

    return (
        <div>
            <div className="conn">
                <div className="light"></div>
                <p className="connect">Connecté</p>
            </div>
            <div className="display_column">
                <div className="title">
                <h1>Demande d'inscription</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    <p className="result_size">Vous avez 8 bonnes réponses au QCM d'informatique</p>
                    <div className="result_cup">
                        <img src={cup_argent} className="img_cup_info_result"></img>
                    </div>
                    <p className="result_size">Rang Argent</p>
                    <p className="result_size">Veuillez vous inscrire pour télécharger votre CV</p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button className={"button_purple bord_right"}>Accueil</button>
                <button className="button_purple bord_left">Connexion</button>
            </div>
        </div> 
    );
};

export default Demande_inscription;