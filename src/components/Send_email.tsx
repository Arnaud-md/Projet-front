
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
    const r1=Math.floor(Math.random()*4+1);
    const r2=Math.floor(Math.random()*4+1);
    const r3=Math.floor(Math.random()*4+1);
    const r4=Math.floor(Math.random()*4+1);
    const r5=Math.floor(Math.random()*4+1);
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
                <h1>Envoi du CV par mail</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    <p className="result_size margin_size">Votre CV a été envoyé à l'adresse {email} Ward@gmail.com</p>
                    <p>{r1} {r2} {r3} {r4} {r5}</p>
                    <p className="result_size margin_bottom_size">Vous pouvez aussi le télécharger depuis l'accueil</p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
            <form action="http://localhost:5173/home">
                <button className={"button_purple bord_right"}>Accueil</button>
            </form>
            </div>
        </div> 
    );
};

export default Send_email;