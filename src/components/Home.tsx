// @ts-ignore
import { useEffect, useState } from "react";
// @ts-ignore
import { useCallback } from "react";
// @ts-ignore
import { Link } from "react-router-dom";
// @ts-ignore
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { Musique } from "./Musique";
// @ts-ignore
import { useRef } from "react";
import coupes from "../img/coupes.jpg";

const Home = () => {
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
            <h1>CV de compétences</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="cups_center">
            <img src={coupes} className="img_cups"></img>
            </div>
            <div className="load_CV">
            <form action="http://localhost:5173/load_cv">
                <button type='submit' className="button_green">Télécharger un CV</button>
            </form>
            </div>
            <p className="council">Répondez à un QCM pour télécharger un CV de compétences</p>
            <div className="strait_green"></div>
            <div className="bot_buttons">
            <form action="http://localhost:5173/entreprises">
                <button type="submit" className="button_purple">Entreprises</button>
            </form>
            <form action="http://localhost:5173/type_de_qcm">
                <button type="submit" className="button_purple">QCM</button>
            </form>
            <form action="http://localhost:5173/connexion">
                <button type="submit" className="button_purple">Connexion</button>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Home;