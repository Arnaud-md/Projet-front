import { useEffect, useState } from "react";
import cup_argent from "../img/coupe_argent.jpg"
// @ts-ignore
import { json } from "react-router-dom";
const Results = () => {
    const isconnect = localStorage.getItem("isconnected");
    // @ts-ignore
    const [idResult,setIdResult] = useState(0);
    const [score,setScore] = useState(0);
    const [subject,setSubject] = useState("");
    useEffect(()=> {
        const resultat = async()=> {
            const response = await fetch('http://localhost:1337/api/results', {
            }) 
            const data = await response.json() as any;
            // data.length-1;
            const highest = data[data.length-1]
            const id = highest.id;
            // const highest = data[Object.keys(data).sort().pop()];
            //const highest = Object.keys(data).sort().pop();
            console.log("highest : ",highest);
            setIdResult(id);
            setScore(highest.score);
            setSubject(highest.subject);
            console.log("rtte", data);
        }
        resultat();
    }, []);
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
                <h1>Résultats</h1>
                </div>
                <div className="strait_purple margin_bottom"></div>
                <div className="result">
                    <p className="result_size">Vous avez {score} bonnes réponses au QCM {subject}</p>
                    <div className="result_cup">
                        <img src={cup_argent} className="img_cup_info_result"></img>
                    </div>
                    <p className="result_size">Rang Argent</p>
                    <p className="result_size"></p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
                <button className={"button_purple bord_right"}>Valider</button>
            </div>
        </div> 
    );
};

export default Results;