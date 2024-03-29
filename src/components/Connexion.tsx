import { useState } from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Connexion = () => {
const [email, setEmail]=useState("");
const [mdp, setMdp]=useState("");
const [iscorrect, setIscorrect]=useState(true);
const navigate = useNavigate();
const api_url = import.meta.env.VITE_API_URL as string;

const isconnect = localStorage.getItem("isconnected");

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
}, [])

const handleChange2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setMdp(e.target.value)
}, [])

const handleClick = useCallback(async() => {
    const response = await fetch(api_url+'/api/auth/local', {
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
      if (data!=="le mot de passe n'est pas le bon" && data!=="l'email saisi n'est pas le bon") {
        localStorage.setItem('token', data)
        localStorage.setItem('isconnected',"true")
        navigate("/home");
      }
      else {
        setIscorrect(false);
        navigate("/connexion")
      }   
}, [email, mdp, navigate])

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
                        <form>
                        <input onChange={handleChange2} type="password" className="mdp"></input>
                        </form>
                    </div>
                    <button onClick={handleClick} className="button_purple connect_button">Connexion</button>
                    {iscorrect?
                    <div></div>:
                    <div className="errormsg">
                        <p>Adresse email ou mot de passe invalide</p>
                    </div>}
                    <p className="mbp">Nouvel utilisateur : inscrivez-vous</p>
                    <Link to="/inscription">
                    <button type="submit" className="button_purple inscription_button">Inscription</button>
                    </Link>
                </div>
            </div>
        </div> 
    );
};

export default Connexion;