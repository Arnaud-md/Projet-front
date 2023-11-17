import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Musique } from "./Musique";
import { useRef } from "react";
import coupes from "./img/coupes.jpg";

const Home = () => {
    const count = useRef(0);
    // const coupes = "./img/coupes.jpg";

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
            <h1>CV de compétences</h1>
            </div>
            <div className="strait_purple"></div>
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

export default Home;