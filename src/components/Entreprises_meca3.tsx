import { Link } from "react-router-dom";

const Entreprises_meca3 = () => {
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
            <h1>Liste des entreprises en mécanique 3/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Reel  </p>
                <div className="strait_grey"></div>
                <p>Page Personnel </p>
                <div className="strait_grey"></div>
                <p>Assystem </p>
                <div className="strait_grey"></div>
                <p>SERES TECHNOLOGIES </p>
                <div className="strait_grey"></div>
                <p>Sei Groupe</p>
                <div className="strait_grey"></div>
                <p>Team.is </p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp_meca3">
            <Link to="/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </Link>
            <Link to="/entreprises_mecanique2">
                <button type="submit" className="button_purple width_size">Page précédente</button>
            </Link>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca3;