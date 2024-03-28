
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Send_email = () => {
    const api_url = import.meta.env.VITE_API_URL as string;
    const isconnect = localStorage.getItem("isconnected");
    // const [nom,setNom] = useState("");
    // const [prenom,setPrenom] = useState("");
    const [email,setEmail] = useState("");
    // const [ismasculin,setIsmasculin] = useState(true);
    // const [filiere,setFiliere] = useState("");
    // const [mention,setMention] = useState("");
    // const [etudes,setEtudes] = useState("");

    const token = localStorage.getItem("token")?.toString() as string | "";
    useEffect(()=> {
        const user = async()=> {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json'); 
            myHeaders.append('Authorization', "Bearer "+token); 
            const response = await fetch((api_url+'/api/users/me'), {
                headers: myHeaders
            })
            const data = await response.json();
            //setNom(data.nom);
            //setPrenom(data.prenom);
            setEmail(data.email);
            //setIsmasculin(data.ismasculin);
            //setFiliere(data.filiere);
            //setMention(data.mention);
            //setEtudes(data.etudes);
        }
        user();
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
                <h1>Téléchargement ou impression du CV</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    {email!==""?
                        <p className="result_size margin_size">Vous êtes connecté avec l'email suivant : {email}</p>:
                        <p className="result_size margin_size">Vous n'êtes pas connecté ou votre session a expirée</p>
                    }
                    {email!==""?
                        <p className="result_size margin_bottom_size">En cliquant sur suivant vous pouvez télécharger ou imprimer un CV de compétences</p>:
                        <p className="result_size margin_bottom_size">En cliquant sur suivant vous serez dirigé vers la page d'accueil</p>
                    }
                </div>
            </div>
            <div className="bot_buttons_inscription">
            {email!==""?
                <Link to="/CV">
                    <button className={"button_purple bord_right"}>Suivant</button>
                </Link>:
                <Link to="/home">
                <button className={"button_purple bord_right"}>Suivant</button>
                </Link>
            }
            </div>
        </div> 
    );
};

export default Send_email;