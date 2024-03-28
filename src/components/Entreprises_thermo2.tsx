import { Link } from "react-router-dom";

const Entreprises_thermo2 = () => {
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
            <h1>Liste des entreprises en thermodynamique 2/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Stago </p>
                <div className="strait_grey"></div>
                <p>Anderson RH</p>
                <div className="strait_grey"></div>
                <p>ARIAL INDUSTRIES</p>
                <div className="strait_grey"></div>
                <p>HAYS </p>
                <div className="strait_grey"></div>
                <p>idex </p>
                <div className="strait_grey"></div>
                <p>OTTEO </p>
                <div className="strait_grey"></div>
                <p>CETIAT </p>
                <div className="strait_grey"></div>
                <p>Dalkia </p>
                <div className="strait_grey"></div>
                <p>INTERIM D'OC</p>
                <div className="strait_grey"></div>
                <p>Carrier</p>
                <div className="strait_grey"></div>
                <p>Socotec</p>
                <div className="strait_grey"></div>
                
            </div>
            <div className="bot_buttons bot_btn_mtp_info2">
            <Link to="/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </Link>
            <Link to="/entreprises_thermodynamique1">
                <button type="submit" className="button_purple width_size">Page précédente</button>
            </Link>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_thermo2;