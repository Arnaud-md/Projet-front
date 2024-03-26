const Entreprises_meca_fluides3 = () => {
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
            <h1>Liste des entreprises en mécanique des fluides 3/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Optin </p>
                <div className="strait_grey"></div>
                <p>Wesearch </p>
                <div className="strait_grey"></div>
                <p>Groupe Technic-Assistance</p>
                <div className="strait_grey"></div>
                <p>Groupe Atlantic </p>
                <div className="strait_grey"></div>
                <p>Abylsen </p>
                <div className="strait_grey"></div>
                <p>Liebherr-Aerospace Toulouse </p>
                <div className="strait_grey"></div>
                <p>VIM </p>
                <div className="strait_grey"></div>
                <p>Force Intérim</p>
                <div className="strait_grey"></div>
                <p>Selescope </p>
                <div className="strait_grey"></div>
                <p>Eiffage Construction</p>
                <div className="strait_grey"></div>
     
            </div>
            <div className="bot_buttons bot_btn_mtp_fluides3">
                <form action="http://localhost:5173/home">
                    <button type="submit" className="button_purple width_size">Accueil</button>
                </form>
                <form action="http://localhost:5173/entreprises_mecanique_fluides2">
                    <button type="submit" className="button_purple width_size">Page précédente</button>
                </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca_fluides3;