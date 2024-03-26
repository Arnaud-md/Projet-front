const Blank = () => {
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
                    <h1>Téléchargement du CV</h1>
                </div>
                <div className="strait_purple mg_bottom_cv"></div>
                    <div className="cv_cup">
                        <p className="error_message">Vous devez être connecté et avoir répondu à un questionnaire au cours de votre session pour télécharger votre CV de compétences</p>
                    </div>
            <div className="bot_buttons mtp">
            <form action="http://localhost:5173/home">
                <button className={"button_purple"}>Accueil</button>
            </form>
            </div>
        </div> 
    </div>
    );
};

export default Blank;