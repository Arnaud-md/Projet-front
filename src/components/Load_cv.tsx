import cup_gold from "../img/coupe_or.jpg";
import cup_bronze from "../img/coupe_bronze.jpg";
import cup_silver from "../img/coupe_argent.jpg";
import cv from "../img/CV3_image.jpg";
import { useEffect, useState } from "react";

const Load_cv = () => {
    const isconnect = localStorage.getItem("isconnected");
    const QuizzId = localStorage.getItem("QuizzId");

    const [score,setScore] = useState(-1);
    const [subject,setSubject] = useState("");

    import.meta.env.VITE_PORT;
    const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337

    useEffect(()=> {
        const scoreFunction = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz/'+QuizzId+'/result'), {
            })
            const data = await response.json();
            console.log("data : ",data);
            setScore(data.score);
            setSubject(data.subject);
        }
        scoreFunction();
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
                    <h1>Téléchargement du CV</h1>
                </div>
                <div className="strait_purple mg_bottom_cv"></div>
                    <div className="cv_cup">
                            <img src={cv} className="img"></img>
                            {score===10||score===9?
                            <img src={cup_gold} className="img_cup_info"></img>:
                            score===8||score===7?
                            <img src={cup_silver} className="img_cup_info"></img>:
                            score===6||score===5?
                            <img src={cup_bronze} className="img_cup_info"></img>:
                            <div></div>
                            }
                    </div>
                    <div className="result_paragraph_div">
                        <p className="result_paragraph">CV de compétences en {subject}</p>
                        <p className="result_paragraph">Note : {score} / 10</p>
                    </div>
                    <div className="print mg_print">
                    <form action="http://localhost:5173/CV">    
                        <button className="button_green_cv">Print</button>
                    </form>
                    </div>
            <div className="bot_buttons mtp">
            <form action="http://localhost:5173/home">
                <button className={"button_purple"}>Accueil</button>
            </form>
            </div>
        </div> 
    </div>
    );
};

export default Load_cv;