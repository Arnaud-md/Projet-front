
import { useEffect, useState } from "react";


import.meta.env.VITE_PORT;
const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337
const Send_email = () => {
    const isconnect = localStorage.getItem("isconnected");
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [email,setEmail] = useState("");
    const [ismasculin,setIsmasculin] = useState(true);
    const [filiere,setFiliere] = useState("");
    const [mention,setMention] = useState("");
    const [etudes,setEtudes] = useState("");

    const token = localStorage.getItem("token")?.toString() as string | "";
    console.log(token)
    useEffect(()=> {
        const user = async()=> {

            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json'); 
            myHeaders.append('Authorization', "Bearer "+token); 
            const response = await fetch(('http://localhost:'+port+'/api/users/me'), {
                //method: 'GET',
                //mode: 'no-cors',
                headers: myHeaders
            })
            const data = await response.json();
            setNom(data.nom);
            setPrenom(data.prenom);
            setEmail(data.email);
            setIsmasculin(data.ismasculin);
            setFiliere(data.filiere);
            setMention(data.mention);
            setEtudes(data.etudes);
        }
        user();
    },[])
    console.log("nom : ",nom);
    console.log("prenom : ",prenom);
    console.log("email : ",email);
    console.log("ismasculin : ",ismasculin);
    console.log("filiere : ",filiere);
    console.log("mention : ",mention);
    console.log("etudes : ",etudes);
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
                <form action="http://localhost:5173/CV">
                    <button className={"button_purple bord_right"}>Suivant</button>
                </form>:
                <form action="http://localhost:5173/home">
                <button className={"button_purple bord_right"}>Suivant</button>
                </form>
            }
            </div>
        </div> 
    );
};

export default Send_email;