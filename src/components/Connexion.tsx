import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
const [pseudo, setPseudo]=useState("");
const [mdp, setMdp]=useState("");
const navigate = useNavigate();

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setPseudo(e.target.value)


}, [])

const handleChange2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setMdp(e.target.value)
   

}, [])

const handleClick = useCallback(async ()=> {
    const response = await fetch("http://localhost:1337/api/auth/local", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            identifier: pseudo,
            password: mdp
        })
    })
    const data = await response.json()

    console.log("reponse : ",data, data.jwt);
    if(data.jwt) {
        navigate("/home");
    }
},[pseudo,mdp,navigate])

    return (
        <div>
            <div className="conn">
                <div className="light"></div>
                <p className="connect">Connecté</p>
            </div>
            <div className="display_column">
                <div className="title">
                <h1>Connexion</h1>
                </div>
                <div className="strait_purple margin_bottom_plus"></div>
                <div className="connexion">
                    <div className="placeholder">
                        <p>Adresse mail </p>
                        <input onChange={handleChange} type="text" className="mail"></input>
                    </div>
                    <div className="placeholder mbp">
                        <p>Mot de passe</p>
                        <input onChange={handleChange2} type="password" className="mdp"></input>
                    </div>
                    <button onClick={handleClick} className="button_purple connect_button">Connexion</button>
                    <div className="errormsg">
                        <p>Adresse email ou mot de passe invalide</p>
                    </div>
                    <p className="mbp">Nouvel utilisateur : inscrivez-vous</p>
                    <button className="button_purple inscription_button">Inscription</button>
                    
                </div>
            </div>
        </div> 
    );
};

export default Connexion;