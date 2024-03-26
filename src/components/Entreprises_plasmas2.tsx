const Entreprises_plasmas2 = () => {
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
            <h1>Liste des entreprises en physique des plasmas 2/2</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>Armelio </p>
                <div className="strait_grey"></div>
                <p>LP2IB</p>
                <div className="strait_grey"></div>
                <p>SCIENTECH Intérim</p>
                <div className="strait_grey"></div>
                <p>AGEPS </p>
                <div className="strait_grey"></div>
                <p>Octapharma </p>
                <div className="strait_grey"></div>
                <p>Ecole polytechnique</p>
                <div className="strait_grey"></div>
                <p>LFB </p>
                <div className="strait_grey"></div>
                <p>MASSON MARINE </p>
                <div className="strait_grey"></div>
                <p>Sayens </p>
                <div className="strait_grey"></div>
                <p>ANR </p>
                <div className="strait_grey"></div>
                <p>Sofitex </p>
                <div className="strait_grey"></div>
                <p>cetim </p>
                <div className="strait_grey"></div>
                <p>Sorbonne Université </p>
                <div className="strait_grey"></div>
                
            </div>
            <div className="bot_buttons bot_btn_mtp_plasmas2">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_physique_des_plasmas1">
                <button type="submit" className="button_purple width_size">Page précédente</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_plasmas2;