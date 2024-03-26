const Entreprises_plasmas1 = () => {
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
            <h1>Liste des entreprises en physique des plasmas 1/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Aurora Cold Plasma Sterilisation</p>
                <div className="strait_grey"></div>
                <p>CEA </p>
                <div className="strait_grey"></div>
                <p>CNRS </p>
                <div className="strait_grey"></div>
                <p>STMicroelectronics </p>
                <div className="strait_grey"></div>
                <p>ONERA </p>
                <div className="strait_grey"></div>
                <p>Safran </p>
                <div className="strait_grey"></div>
                <p>GE Renewable Energy</p>
                <div className="strait_grey"></div>
                <p>Symbio </p>
                <div className="strait_grey"></div>
                <p>Polygon Physics</p>
                <div className="strait_grey"></div>
                <p>IDIL Fibres Optiques</p>
                <div className="strait_grey"></div>
                <p>Sodern </p>
                <div className="strait_grey"></div>
                <p>Université d'Orléans</p>
                <div className="strait_grey"></div>
                <p>Ecole Centrale Paris</p>
                <div className="strait_grey"></div>
                <p>Thales</p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_physique_des_plasmas2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_plasmas1;