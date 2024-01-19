import cup_gold from "../img/coupe_or.jpg";
import cup_bronze from "../img/coupe_bronze.jpg";
import cup_silver from "../img/coupe_argent.jpg";
import cv from "../img/CV3_image.jpg";

const Load_CV = () => {
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
                    <h1>Téléchargement des CV</h1>
                </div>
                <div className="strait_purple"></div>
                <div className="six_img">
                    <div className="three_components">
                        <div className="imgs_info">
                            <img src={cv} className="img"></img>
                            <img src={cup_gold} className="img_cup_info"></img>
                         </div>
                        <button className="button_green_qcm">Informatique</button>
                    </div>
                    <div className="three_components">
                        <div className="imgs_meca">
                            <img src={cv} className="img"></img>
                            <img src={cup_bronze} className="img_cup_meca"></img>
                        </div>
                        <button className="button_green_qcm">Mécanique</button>
                    </div>
                    <div className="three_components">
                        <div className="imgs_fluides">
                            <img src={cv} className="img"></img>
                            <img src={cup_silver} className="img_cup_fluides"></img>
                        </div>
                        <button className="button_green_qcm">Mécanique des fluides</button>
                    </div>
                    <div className="three_components">
                        <div className="imgs_thermo">
                            <img src={cv} className="img"></img>
                            {/* <img src={cup_thermo} className="img_cup_thermo"></img> */}
                        </div>
                        <button className="button_green_qcm">Thermo-dynamique</button>
                    </div>
                    <div className="three_components">
                        <div className="imgs_plasmas">
                            <img src={cv} className="img"></img>
                            {/* <img src={cup_plasmas} className="img_cup_plasmas"></img> */}
                        </div>
                        <button className="button_green_qcm">Physique des plasmas</button>
                    </div>
                    <div className="three_components">
                        <div className="imgs_electronique">
                            <img src={cv} className="img"></img>
                            {/* <img src={cup_electronique} className="img_cup_electronique"></img> */}
                        </div>
                        <button className="button_green_qcm">Electronique</button>
                    </div>
                </div>

            <div className="bot_buttons mtp">
                <button className={"button_purple bord_right"}>Accueil</button>
                <button className="button_purple bord_left">Connexion</button>
            </div>
        </div> 
    </div>
    );
};

export default Load_CV;