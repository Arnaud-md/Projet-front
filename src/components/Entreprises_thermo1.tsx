const Entreprises_thermo1 = () => {
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
            <h1>Liste des entreprises en thermodynamique 1/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Daikin France</p>
                <div className="strait_grey"></div>
                <p>Fives</p>
                <div className="strait_grey"></div>
                <p>SUEZ </p>
                <div className="strait_grey"></div>
                <p>FED Ingénierie</p>
                <div className="strait_grey"></div>
                <p>ESILV </p>
                <div className="strait_grey"></div>
                <p>Hutchinson </p>
                <div className="strait_grey"></div>
                <p>YACK </p>
                <div className="strait_grey"></div>
                <p>TEYOMA </p>
                <div className="strait_grey"></div>
                <p>Reper </p>
                <div className="strait_grey"></div>
                <p>Absolut Hydrogen</p>
                <div className="strait_grey"></div>
                <p>LR Technologies Sud Ouest</p>
                <div className="strait_grey"></div>
                <p>Absolut System</p>
                <div className="strait_grey"></div>
                <p>ENGIE ENERGIE SERVICES</p>
                <div className="strait_grey"></div>
                <p>Intuis </p>
                <div className="strait_grey"></div>
                <p>Air Liquide</p>
                <div className="strait_grey"></div>
                <p>AVANTIS Group</p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <form action="http://localhost:5173">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_thermodynamique2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_thermo1;