import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
    const isconnect = localStorage.getItem("isconnected");
    
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [email, setEmail]=useState("");
    const [m,setM]=useState(false);
    const [f,setF]=useState(false);
    const [filiere, setFiliere]=useState("");
    const [mention, setMention]=useState("");
    const [etudes, setEtudes]=useState("");
    const [mdp, setMdp]=useState("");
    // @ts-ignore
    const [mdp2, setMdp2]=useState("");
    const navigate = useNavigate();
    const handleChangeNom = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
                setNom(e.target.value);
    }, []);
    const handleChangePrenom = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
                setPrenom(e.target.value);
    }, []);
    const handleChangeMail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
                setEmail(e.target.value);
    }, []);
    const handleChangeMasculin = useCallback(() => {
                setM(!m);
    }, []);
    const handleChangeFeminin = useCallback(() => {
        setF(!f);
    }, []);
    const handleChangeFiliere = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
        setFiliere(e.target.value);
    }, []);
    const handleChangeMention = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
        setMention(e.target.value);
    }, []);
    const handleChangeEtudes = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
        setEtudes(e.target.value);
    }, []);
    const handleChangeMdp = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
        setMdp(e.target.value);
    }, []);
    const handleChangeMdp2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
        setMdp2(e.target.value);
    }, []);
    const handleClick = useCallback(async() => {
        // Lancez une requête POST vers l'API avec les données de connexion
        const response = await fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nom: nom,
              prenom: prenom,
              email: email,
              ismasculin: m,
              filiere: filiere,
              mention: mention,
              etudes: etudes,
              password: mdp
            })
          })
          const data = await response.text()
          console.log("rtte", data)
          if (data!=="l'email que vous avez saisi est déjà utilisé") {
            
            localStorage.setItem('token', data);
            navigate("/home");
          }
        // Si la connexion est réussie,  stockez le token dans le localStorage
        // Et redirigez l'utilisateur vers la page d'accueil

        // Si la connexion est échouée, affichez un message d'erreur
        
    }, [nom,prenom,email,m,filiere,mention,etudes,mdp]);
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
                <h1>Inscription</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="inscription">
                    <div className="placeholder">
                        <p>Nom* </p>
                        <input onChange={handleChangeNom} type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Prénom* </p>
                        <input onChange={handleChangePrenom} type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Adresse mail* </p>
                        <input onChange={handleChangeMail} type="text" className="ph"></input>
                    </div>
                    <div className="radio">
                        <p>Sexe* </p>
                        <div className="sexe">
                        <input onClick={handleChangeMasculin} checked={m} type="radio" className="rd"></input>
                        <p>Masculin</p>
                        </div>
                        <div className="sexe">
                        <input onClick={handleChangeFeminin} checked={f} type="radio" className="rd"></input>
                        <p>Féminin</p>
                        </div>
                    </div>
                    <p className="bac">Baccalauréat : </p>
                    <div className="placeholder">
                        <p>Filière : </p>
                        <input onChange={handleChangeFiliere} type="text" className="ph"></input>
                    </div>
                    <div className="placeholder">
                        <p>Mention : </p>
                        <input onChange={handleChangeMention} type="text" className="ph"></input>
                    </div>
                    <p>Etudes (titre,niveaux) : </p>
                    <div className="placeholder_etudes">
                        <input onChange={handleChangeEtudes} type="text" className="ph_etudes"></input>
                    </div>
                    <button className="add_studies">Ajouter des études</button>
                    <div className="placeholder">
                        <p>Mot de passe* : </p>
                        <input onChange={handleChangeMdp} type="text" className="ph"></input>
                    </div>
                    <div className="placeholder size">
                        <p className="repeat_password">Répéter mot de passe* : </p>
                        <input onChange={handleChangeMdp2} type="text" className="ph"></input>
                    </div>
                    <p className="info">Veuillez renseigner les champs avec une astérique</p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button onClick={handleClick} className="button_purple bord_right">Envoyer</button>
            </div>
        </div> 
    );
};

export default Inscription;