import { useState } from "react";
import { useCallback } from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
const [email, setEmail]=useState("");
const [mdp, setMdp]=useState("");
const [iscorrect, setIscorrect]=useState(true);
const navigate = useNavigate();

const isconnect = localStorage.getItem("isconnected");

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setEmail(e.target.value)


}, [])

const handleChange2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setMdp(e.target.value)
   

}, [])

const handleClick = useCallback(async() => {
    // Lancez une requête POST vers l'API avec les données de connexion
    const response = await fetch('http://localhost:8887/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: mdp
        })
      })
      const data = await response.text()
      console.log("rtte", data)
      if (data!=="le mot de passe n'est pas le bon" && data!=="l'email saisi n'est pas le bon") {
        localStorage.setItem('token', data)
        localStorage.setItem('isconnected',"true")
        navigate("/home");
      }
      else {
        setIscorrect(false);
        console.log("iscorrect false");
        navigate("/connexion")
      }
    // Si la connexion est réussie,  stockez le token dans le localStorage
    // Et redirigez l'utilisateur vers la page d'accueil

    // Si la connexion est échouée, affichez un message d'erreur
    
}, [email, mdp])

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
                    {iscorrect?
                    <div></div>:
                    <div className="errormsg">
                        <p>Adresse email ou mot de passe invalide</p>
                    </div>}
                    <p className="mbp">Nouvel utilisateur : inscrivez-vous</p>
                    <form action="http://localhost:5173/inscription">
                    <button type="submit" className="button_purple inscription_button">Inscription</button>
                    </form>
                    
                </div>
            </div>
        </div> 
    );
};

export default Connexion;