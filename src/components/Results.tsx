import { useEffect, useState } from "react";
import cup_or from "../img/coupe_or.jpg";
import cup_argent from "../img/coupe_argent.jpg";
import cup_bronze from "../img/coupe_bronze.jpg";
import.meta.env.VITE_PORT;


const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337
const Results = () => {
    const isconnect = localStorage.getItem("isconnected");
    const quizzId = localStorage.getItem("QuizzId");
    const [score,setScore] = useState(-1);
    const [subject,setSubject] = useState("");
    useEffect(()=> {
        const scoreFunction = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz/'+quizzId+'/result'), {
            })
            const data = await response.json();
            console.log("data : ",data);
            setScore(data.score);
            setSubject(data.subject);
        }
        scoreFunction();
    },[])
    console.log("score : ",score);
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
                        {score===9||score===10 ?
                        <img src={cup_or} className="img_cup_info_result"></img>:
                        score===7||score==8 ?
                        <img src={cup_argent} className="img_cup_info_result"></img>:
                        score===5||score===6 ?
                        <img src={cup_bronze} className="img_cup_info_result"></img>:
                        <div></div>
                        }
                    </div>
                    <p className="result_size">Rang Argent</p>
                    <p className="result_size"></p>
                </div>
            </div>
            <div className="bot_buttons_inscription">
            <form action='http://localhost:5173/send_email'>
                <button type='submit' className={"button_purple bord_right"}>Valider</button>
            </form>
            </div>
        </div> 
    );
};

export default Results;