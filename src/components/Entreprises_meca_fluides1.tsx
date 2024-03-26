const Entreprises_meca_fluides1 = () => {
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
            <h1>Liste des entreprises en mécanique des fluides 1/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Framatome </p>
                <div className="strait_grey"></div>
                <p>EDF </p>
                <div className="strait_grey"></div>
                <p>Ariane Group </p>
                <div className="strait_grey"></div>
                <p>Segula Technologies </p>
                <div className="strait_grey"></div>
                <p>Approach People</p>
                <div className="strait_grey"></div>
                <p>CEA </p>
                <div className="strait_grey"></div>
                <p>CT Ingénierie Toulouse</p>
                <div className="strait_grey"></div>
                <p>EXTEND CONSULTING</p>
                <div className="strait_grey"></div>
                <p>ENGIE </p>
                <div className="strait_grey"></div>
                <p>Fed Construction </p>
                <div className="strait_grey"></div>
                <p>Morgan Services </p>
                <div className="strait_grey"></div>
                <p>Geser Best </p>
                <div className="strait_grey"></div>
                <p>Astek </p>
                <div className="strait_grey"></div>
                <p>Naval Group</p>
                <div className="strait_grey"></div>
                <p>Assystem </p>
                <div className="strait_grey"></div>
     
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_mecanique_fluides2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca_fluides1;