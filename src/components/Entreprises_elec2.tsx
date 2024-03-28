import { Link } from "react-router-dom";

const Entreprises_elec2 = () => {
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
                    <h1>Liste des entreprises en électronique 2/3</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="list">
                    <p>Adsearch </p>
                    <div className="strait_grey"></div>
                    <p>Groupe Piment </p>
                    <div className="strait_grey"></div>
                    <p>WellJob Interim </p>
                    <div className="strait_grey"></div>
                    <p>Iziwork </p>
                    <div className="strait_grey"></div>
                    <p>Acass </p>
                    <div className="strait_grey"></div>
                    <p>Harry Hope</p>
                    <div className="strait_grey"></div>
                    <p>Darty </p>
                    <div className="strait_grey"></div>
                    <p>Thales </p>
                    <div className="strait_grey"></div>
                    <p>Safran </p>
                    <div className="strait_grey"></div>
                    <p>Start People </p>
                    <div className="strait_grey"></div>
                    <p>SUEZ </p>
                    <div className="strait_grey"></div>
                    <p>Interaction </p>
                    <div className="strait_grey"></div>
                    <p>Samsic Emploi</p>
                    <div className="strait_grey"></div>
                    <p>Celad </p>
                    <div className="strait_grey"></div>
                    <p>Sup Interim</p>
                    <div className="strait_grey"></div>
                    <p>Expleo </p>
                    <div className="strait_grey"></div>
                </div>
                <div className="bot_buttons bot_btn_mtp">
                <Link to="/home">
                    <button type="submit" className="button_purple width_size">Accueil</button>
                </Link>
                <Link to="/entreprises_electronique1">
                    <button type="submit" className="button_purple width_size">Page précédente</button>
                </Link>
                <Link to="/entreprises_electronique3">
                    <button type="submit" className="button_purple width_size">Page suivante</button>
                </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Entreprises_elec2;