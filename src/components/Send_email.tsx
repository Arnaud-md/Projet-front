const Send_email = () => {
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
                <h1>Envoi du CV par mail</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    <p className="result_size margin_size">Votre CV a été envoyé à l'adresse Ward@gmail.com</p>
                    <p className="result_size margin_bottom_size">Vous pouvez aussi le télécharger depuis l'accueil</p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button className={"button_purple bord_right"}>Accueil</button>
            </div>
        </div> 
    );
};

export default Send_email;