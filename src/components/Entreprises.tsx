import info from "../img/informatique.jpg";
import meca from "../img/mecanique.jpg";
import fluides from "../img/mecanique_des_fluides.jpg";
import thermo from "../img/thermodynamique.jpeg";
import plasmas from "../img/physique_des_plasmas.jpg";
import electronique from "../img/electronique.jpg";
import cup_info from "../img/coupe_or.jpg";
import cup_meca from "../img/coupe_bronze.jpg";
import cup_fluides from "../img/coupe_argent.jpg";

const Entreprises = () => {
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
                    <h1>Entreprises</h1>
                </div>
                <div className="strait_purple"></div>
                <div className="six_img">
                    <div className="three_components">
                        <div className="imgs_info">
                            <img src={info} className="img_info"></img>
                         </div>
                         <form action="http://localhost:5173/entreprises_informatique1">
                        <button type="submit" className="button_green_qcm">Informatique</button>
                        </form>
                    </div>
                    <div className="three_components">
                        <div className="imgs_meca">
                            <img src={meca} className="img_meca"></img>
                        </div>
                        <form action="http://localhost:5173/entreprises_mecanique1">
                        <button type="submit" className="button_green_qcm">Mécanique</button>
                        </form>
                    </div>
                    <div className="three_components">
                        <div className="imgs_fluides">
                            <img src={fluides} className="img_fluides"></img>
                        </div>
                        <form action="http://localhost:5173/entreprises_mecanique_fluides1">
                        <button type="submit" className="button_green_qcm">Mécanique des fluides</button>
                        </form>
                    </div>
                    <div className="three_components">
                        <div className="imgs_thermo">
                            <img src={thermo} className="img_thermo"></img>
                        </div>
                        <form action="http://localhost:5173/entreprises_thermodynamique1">
                        <button type="submit" className="button_green_qcm">Thermo-dynamique</button>
                        </form>
                    </div>
                    <div className="three_components">
                        <div className="imgs_plasmas">
                            <img src={plasmas} className="img_plasmas"></img>
                        </div>
                        <form action="http://localhost:5173/entreprises_physique_des_plasmas1">
                        <button type="submit" className="button_green_qcm">Physique des plasmas</button>
                        </form>
                    </div>
                    <div className="three_components">
                        <div className="imgs_electronique">
                            <img src={electronique} className="img_electronique"></img>
                        </div>
                        <form action="http://localhost:5173/entreprises_electronique1">
                        <button type="submit" className="button_green_qcm">Electronique</button>
                        </form>
                    </div>
                </div>

            <div className="bot_buttons mtp">
            <form action="http://localhost:5173">
                <button type="submit" className={"button_purple bord_right"}>Accueil</button>
            </form> 
            </div>
        </div> 
    </div>
    );
};

export default Entreprises;