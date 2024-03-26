const Entreprises_elec1 = () => {
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
            <h1>Liste des entreprises en électronique 1/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>LTD </p>
                <div className="strait_grey"></div>
                <p>Métiers de la VRD régions, Télécom, Eau & Environnement</p>
                <div className="strait_grey"></div>
                <p>Manpower </p>
                <div className="strait_grey"></div>
                <p>Crit </p>
                <div className="strait_grey"></div>
                <p>Synergie </p>
                <div className="strait_grey"></div>
                <p>L'industrie recrute </p>
                <div className="strait_grey"></div>
                <p>Proman </p>
                <div className="strait_grey"></div>
                <p>Aquila RH</p>
                <div className="strait_grey"></div>
                <p>Adequat </p>
                <div className="strait_grey"></div>
                <p>Page Personnel </p>
                <div className="strait_grey"></div>
                <p>Geco </p>
                <div className="strait_grey"></div>
                <p>Expectra </p>
                <div className="strait_grey"></div>
                <p>Renault Group </p>
                <div className="strait_grey"></div>
                <p>Job Link</p>
                <div className="strait_grey"></div>
                <p>Serma Ingénierie </p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_electronique2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_elec1;