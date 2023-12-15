const Entreprises_meca2 = () => {
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
                    <h1>Liste des entreprises en mécanique 2/3</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="list">
                    <p>Pharea</p>
                    <div className="strait_grey"></div>
                    <p>Orano </p>
                    <div className="strait_grey"></div>
                    <p>Ariane </p>
                    <div className="strait_grey"></div>
                    <p>Groupe Ortec </p>
                    <div className="strait_grey"></div>
                    <p>Alten DDPS</p>
                    <div className="strait_grey"></div>
                    <p>Groupe ADF </p>
                    <div className="strait_grey"></div>
                    <p>EDF </p>
                    <div className="strait_grey"></div>
                    <p>Ingeliance Technologies</p>
                    <div className="strait_grey"></div>
                    <p>Akkodis </p>
                    <div className="strait_grey"></div>
                    <p>Expectra </p>
                    <div className="strait_grey"></div>
                    <p>Davidson Consulting </p>
                    <div className="strait_grey"></div>
                    <p>CEA </p>
                    <div className="strait_grey"></div>
                    <p>Arkadia Group</p>
                    <div className="strait_grey"></div>
                    <p>LR Technologies Groupe</p>
                    <div className="strait_grey"></div>
                    <p>Capgemini Engineering </p>
                    <div className="strait_grey"></div>
                    <p>Synergie  </p>
                    <div className="strait_grey"></div>
                </div>
                <div className="bot_buttons bot_btn_mtp">
                <form action="http://localhost:5173">
                    <button type="submit" className="button_purple width_size">Accueil</button>
                </form>
                    <form action="http://localhost:5173/entreprises_mecanique1">
                    <button type="submit" className="button_purple width_size">Page précédente</button>
                </form>
                    <form action="http://localhost:5173/entreprises_mecanique3">
                </form>
                    <button type="submit" className="button_purple width_size">Page suivante</button>
                </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca2;