const Entreprises_meca1 = () => {
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
            <h1>Liste des entreprises en mécanique 1/3</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="list">
                <p>SAFRAN </p>
                <div className="strait_grey"></div>
                <p>framatome </p>
                <div className="strait_grey"></div>
                <p>expleo </p>
                <div className="strait_grey"></div>
                <p>Astek </p>
                <div className="strait_grey"></div>
                <p>L'industrie recrute</p>
                <div className="strait_grey"></div>
                <p>QONEX </p>
                <div className="strait_grey"></div>
                <p>Ametra </p>
                <div className="strait_grey"></div>
                <p>Segula Technologies</p>
                <div className="strait_grey"></div>
                <p>Groupe excent</p>
                <div className="strait_grey"></div>
                <p>Manpower </p>
                <div className="strait_grey"></div>
                <p>Bertrandt </p>
                <div className="strait_grey"></div>
                <p>Studiel </p>
                <div className="strait_grey"></div>
                <p>Abylsen </p>
                <div className="strait_grey"></div>
                <p>XS Groupe</p>
                <div className="strait_grey"></div>
                <p>DAVRICOURT </p>
                <div className="strait_grey"></div>
                <p>Fortil </p>
                <div className="strait_grey"></div>
            </div>
            <div className="bot_buttons bot_btn_mtp">
            <form action="http://localhost:5173/home">
                <button type="submit" className="button_purple width_size">Accueil</button>
            </form>
            <form action="http://localhost:5173/entreprises_mecanique2">
                <button type="submit" className="button_purple width_size">Page suivante</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Entreprises_meca1;