const Inscription = () => {

    return (
        <div>
            <div className="conn">
                <div className="light"></div>
                <p className="connect">Connecté</p>
            </div>
            <div className="display_column">
                <div className="title">
                <h1>Inscription</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="inscription">
                    <div className="placeholder">
                        <p>Nom* </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Prénom* </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Adresse mail* </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <div className="radio">
                        <p>Sexe* </p>
                        <div className="sexe">
                        <input type="radio" className="rd"></input>
                        <p>Masculin</p>
                        </div>
                        <div className="sexe">
                        <input type="radio" className="rd"></input>
                        <p>Féminin</p>
                        </div>
                    </div>
                    <p className="bac">Baccalauréat : </p>
                    <div className="placeholder">
                        <p>Filière : </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Mention : </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <p>Etudes (titre,niveaux) : </p>
                    <div className="placeholder_etudes">
                        <input type="text" className="ph_etudes"></input>
                    </div>
                    <button className="add_studies">Ajouter des études</button>
                    <div className="placeholder">
                        <p>Mot de passe* : </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <div className="placeholder size">
                        <p className="repeat_password">Répéter mot de passe* : </p>
                        <input type="text" className="ph"></input>
                    </div>
                    <p className="info">Veuillez renseigner les champs avec une astérique</p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button className={"button_purple bord_right"}>Accueil</button>
                <button className="button_purple bord_left">Connexion</button>
            </div>
        </div> 
    );
};

export default Inscription;