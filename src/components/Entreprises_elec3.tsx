const Entreprises_elec3 = () => {

    return (
        <div>
            <div className="conn">
            <div className="light"></div>
            <p className="connect">Connecté</p>
            </div>
            <div className="display_column">
            <div className="title">
            <h1>Liste des entreprises en électronique 3/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Régional Intérim et R Intérim, Groupe Triangle Solutions RH</p>
                <div className="strait_grey"></div>
                <p>LIP Industrie Bâtiment</p>
                <div className="strait_grey"></div>
                <p>Boulanger </p>
                <div className="strait_grey"></div>
                <p>Partnaire </p>
                <div className="strait_grey"></div>
                <p>ELSYS Design</p>
                <div className="strait_grey"></div>
                <p>Temporis </p>
                <div className="strait_grey"></div>
                <p>Actua </p>
                <div className="strait_grey"></div>
                <p>Page Personnel </p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp_elec3">
            <form action="http://localhost:5173">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_electronique2">
                <button type="submit" className="button_purple width_size">Page précédente</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_elec3;