import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Musique } from "./Musique";
import { useRef } from "react";
import coupes from "../img/coupes.jpg";

const Home = () => {

    return (
        <div>
            <div className="conn">
            <div className="light"></div>
            <p className="connect">Connecté</p>
            </div>
            <div className="display_column">
            <div className="title">
            <h1>CV de compétences</h1>
            </div>
            <div className="strait_purple margin_bottom"></div>
            <div className="cups_center">
            <img src={coupes} className="img_cups"></img>
            </div>
            <div className="load_CV">
            <button className="button_green">Télécharger un CV</button>
            </div>
            <p className="council">Répondez à un QCM pour télécharger un CV de compétences</p>
            <div className="strait_green"></div>
            <div className="bot_buttons">
                <button className="button_purple">Entreprises</button>
                <button className="button_purple">QCM</button>
                <button className="button_purple">Connexion</button>
            </div>
            </div>
            
        </div>
    );
};

export default Home;