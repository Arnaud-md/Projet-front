import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Musique } from "./Musique";
import info from "./img/informatique.jpg";
import meca from "./img/mecanique.jpg";
import fluides from "./img/mecanique_des_fluides.jpg";
import thermo from "./img/thermodynamique.jpeg";
import plasmas from "./img/physique_des_plasmas.jpg";
import electronique from "./img/electronique.jpg";
import cup_info from "./img/coupe_or.jpg";
import cup_meca from "./img/coupe_bronze.jpg";
import cup_fluides from "./img/coupe_argent.jpg";

const Type_de_QCM = () => {
    // const [musiquesPreferees, setMusiquesPreferees]=useState([]);
    // const [musiquesParDate, setMusiquesParDate]=useState([]);
    // const navigate = useNavigate();
    // console.log("tableau des musiques préférées : ",musiquesPreferees);
    // console.log("tableau des musiques par date de sortie : ",musiquesParDate);
    // useEffect( () => {
    //     const getMusics = async () => {
    //         const response = await fetch("http://localhost:1337/api/musiques?filters[Favoris][$eq]=true&populate=*")
    //         const data = await response.json()
    //         console.log('musiques', data.data)
    //         setMusiquesPreferees(data.data);
    //     }
    //     getMusics()
    // }, [])

    // useEffect( () => {
    //     const getMusics = async () => {
    //         const response = await fetch("http://localhost:1337/api/musiques?tri=Date_de_sortie&populate=*")
    //         const data = await response.json()
    //         console.log('musiques par date', data.data)
    //         setMusiquesParDate(data.data);
    //     }
    //     getMusics()
    // }, [])

    return (
        <div>
        <div className="conn">
        <div className="light"></div>
        <p className="connect">Connecté</p>
        </div>
        <div className="display_column">
        <div className="title">
        <h1>Types de QCM</h1>
        </div>
        <div className="strait_purple"></div>
        <div className="six_img">
            <div className="three_components">
            <div className="imgs_info">
                <img src={info} className="img_info"></img>
                <img src={cup_info} className="img_cup_info"></img>
            </div>
            <button className="button_green">Informatique</button>
            </div>
            <div className="three_components">
            <div className="imgs_meca">
                <img src={meca} className="img_meca"></img>
                <img src={cup_meca} className="img_cup_meca"></img>
            </div>
            <button className="button_green">Mécanique</button>
            </div>
            <div className="three_components">
            <div className="imgs_fluides">
                <img src={fluides} className="img_fluides"></img>
                <img src={cup_fluides} className="img_cup_fluides"></img>
            </div>
            <button className="button_green">Mécanique des fluides</button>
            </div>
            <div className="three_components">
            <div className="imgs_thermo">
                <img src={thermo} className="img_thermo"></img>
                {/* <img src={cup_thermo} className="img_cup_thermo"></img> */}
            </div>
            <button className="button_green">Thermodynamique</button>
            </div>
            <div className="three_components">
            <div className="imgs_plasmas">
                <img src={plasmas} className="img_plasmas"></img>
                {/* <img src={cup_plasmas} className="img_cup_plasmas"></img> */}
            </div>
            <button className="button_green">Physique des plasmas</button>
            </div>
            <div className="three_components">
            <div className="imgs_electronique">
                <img src={electronique} className="img_electronique"></img>
                {/* <img src={cup_electronique} className="img_cup_electronique"></img> */}
            </div>
            <button className="button_green">Electronique</button>
            </div>
        </div>

        <div className="bot_buttons">
            <button className={"button_purple bord_right"}>Accueil</button>
            <button className="button_purple bord_left">Connexion</button>
        </div>
        </div>
        {/* <button className="button">Ajouter une musique</button>
        </div>
        <h2>Mes musiques préférées</h2>
        <div className="container_total">
        {musiquesPreferees.map((valeur: any, index) => (
            <Musique 
            //key={index}
            couleur={valeur.attributes.Couleur_de_fond}
            titre={valeur.attributes.Titre}
            chanteur={valeur.attributes.chanteur.data.attributes}
            //onRoll={(value: number) => handleRoll(index, value)} 
            />
        ))}
        </div>
        <h2>Mes musiques par date de sortie</h2>
        <div className="container_total">
        {musiquesParDate.map((valeur: any, index) => (
            <Musique 
            //key={index}
            couleur={valeur.attributes.Couleur_de_fond}
            titre={valeur.attributes.Titre}
            chanteur={valeur.attributes.chanteur.data.attributes}
            //onRoll={(value: number) => handleRoll(index, value)} 
            />
        ))} */}
        
    </div>
    );
};

export default Type_de_QCM;