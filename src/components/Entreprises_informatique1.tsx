import { Link } from "react-router-dom";

const Entreprises_informatique1 = () => {
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
            <h1>Liste des entreprises en informatique 1/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>agora-software</p>
                <div className="strait_grey"></div>
                <p>Orus</p>
                <div className="strait_grey"></div>
                <p>LMSYS</p>
                <div className="strait_grey"></div>
                <p>Free Pro</p>
                <div className="strait_grey"></div>
                <p>Pepperbay</p>
                <div className="strait_grey"></div>
                <p>Localranker</p>
                <div className="strait_grey"></div>
                <p>Once For All</p>
                <div className="strait_grey"></div>
                <p>anod</p>
                <div className="strait_grey"></div>
                <p>Whoz</p>
                <div className="strait_grey"></div>
                <p>Woop</p>
                <div className="strait_grey"></div>
                <p>Welcomr</p>
                <div className="strait_grey"></div>
                <p>echOpen</p>
                <div className="strait_grey"></div>
                <p>iDAKTO</p>
                <div className="strait_grey"></div>
                <p>Namastay</p>
                <div className="strait_grey"></div>
                <p>Reveal</p>
                <div className="strait_grey"></div>
                <p>OuiLive</p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <Link to="/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </Link>
            <Link to="/entreprises_informatique2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </Link>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_informatique1;