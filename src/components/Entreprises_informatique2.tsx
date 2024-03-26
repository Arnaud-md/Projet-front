const Entreprises_informatique2 = () => {
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
            <h1>Liste des entreprises en informatique 2/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Mydral </p>
                <div className="strait_grey"></div>
                <p>Club Employés</p>
                <div className="strait_grey"></div>
                <p>TOMCAT TALENTS</p>
                <div className="strait_grey"></div>
                <p>Axionable </p>
                <div className="strait_grey"></div>
                <p>Bonial </p>
                <div className="strait_grey"></div>
                <p>Generix Group</p>
                <div className="strait_grey"></div>
                <p>Technis </p>
                <div className="strait_grey"></div>
                <p>Cheerz </p>
                <div className="strait_grey"></div>
                <p>DBM Partners</p>
                <div className="strait_grey"></div>
                <p>TrustUp Group</p>
                <div className="strait_grey"></div>
                <p>Batch</p>
                <div className="strait_grey"></div>
                
            </div>
            <div className="bot_buttons bot_btn_mtp_info2">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_informatique1">
                <button type="submit" className="button_purple width_size">Page précédente</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_informatique2;