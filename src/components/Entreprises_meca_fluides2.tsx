const Entreprises_meca_fluides2 = () => {
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
            <h1>Liste des entreprises en mécanique des fluides 2/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Framatome </p>
                <div className="strait_grey"></div>
                <p>Réseau alliance </p>
                <div className="strait_grey"></div>
                <p>B2R Group</p>
                <div className="strait_grey"></div>
                <p>Andros </p>
                <div className="strait_grey"></div>
                <p>Manpower </p>
                <div className="strait_grey"></div>
                <p>Skayl </p>
                <div className="strait_grey"></div>
                <p>Adsearch </p>
                <div className="strait_grey"></div>
                <p>NEO2</p>
                <div className="strait_grey"></div>
                <p>Elcimaï </p>
                <div className="strait_grey"></div>
                <p>Easy Skill</p>
                <div className="strait_grey"></div>
                <p>Orano </p>
                <div className="strait_grey"></div>
                <p>Expectra </p>
                <div className="strait_grey"></div>
                <p>LNE </p>
                <div className="strait_grey"></div>
                <p>Amanora Technologies</p>
                <div className="strait_grey"></div>
                <p>Skayl Schiltigheim</p>
                <div className="strait_grey"></div>
     
            </div>
            <div className="bot_buttons bot_btn_mtp">
                <form action="http://localhost:5173">
                    <button type="submit" className="button_purple width_size">Accueil</button>
                </form>
                <form action="http://localhost:5173/entreprises_mecanique_fluides1">
                    <button type="submit" className="button_purple width_size">Page précédente</button>
                </form>
                <form action="http://localhost:5173/entreprises_mecanique_fluides3">
                    <button type="submit" className="button_purple width_size">Page suivante</button>
                </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca_fluides2;