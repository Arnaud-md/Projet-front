import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import coupes from "../img/coupes.jpg";

const Home = () => {
    const isconnect = localStorage.getItem("isconnected");
    const QuizzId = localStorage.getItem("QuizzId") as unknown as number;
    const navigate = useNavigate();
    const handleClick = useCallback(()=>{
        localStorage.clear();
        navigate("/");
    },[])
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
                    <h1>CV de compétences</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="cups_center">
                    <img src={coupes} className="img_cups"></img>
                </div>
                <div className="load_CV">
                    {isconnect==="true"&&QuizzId>0?
                    <Link to="/load_cv">
                        <button type='submit' className="button_green">Télécharger un CV</button>
                    </Link>:
                    <Link to="/blank">
                        <button type='submit' className="button_green">Télécharger un CV</button>
                    </Link>
                    }
                </div>
                <p className="council">Répondez à un QCM pour télécharger un CV de compétences</p>
                <div className="strait_green"></div>
                <div className="bot_buttons">
                    <Link to="/entreprises">
                        <button type="submit" className="button_purple">Entreprises</button>
                    </Link>
                    <Link to="/type_de_qcm">
                        <button type="submit" className="button_purple">QCM</button>
                    </Link>
                    <Link to="/connexion">
                        <button type="submit" className="button_purple">Connexion</button>
                    </Link>
                </div>
                <div className="center">
                    <button onClick={handleClick} className="button_purple_big">Déconnexion</button>
                </div>
            </div>
            
        </div>
    );
};

export default Home;