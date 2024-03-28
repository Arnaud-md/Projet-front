import { useEffect, useState } from "react";
import cup_or from "../img/coupe_or.jpg";
import cup_argent from "../img/coupe_argent.jpg";
import cup_bronze from "../img/coupe_bronze.jpg";
import { Link } from "react-router-dom";

const Results = () => {
    const api_url = import.meta.env.VITE_API_URL as string;
    const isconnect = localStorage.getItem("isconnected");
    const quizzId = localStorage.getItem("QuizzId");
    const [score,setScore] = useState(-1);
    const [subject,setSubject] = useState("");
    const [question,setQuestion] = useState([] as string[]);
    const [reponse_donnee,setReponse_donnee] = useState([] as string[]);
    const [bonne_reponse,setBonne_reponse] = useState([] as string[]);

    useEffect(()=> {
        const scoreFunction = async()=> {
            const response = await fetch((api_url+'/api/quizz/'+quizzId+'/result'), {
            })
            const data = await response.json();
            setScore(data.score);
            setSubject(data.subject);
        }
        scoreFunction();
    },[])
    useEffect(()=> {
        const correction = async()=> {
            const response = await fetch((api_url+'/api/quizz/'+quizzId+'/result/correction'), {
            })
            const data = await response.json();
            const data_question = data.question_def;
            const data_reponse_donnee = data.reponse_donnee_def;
            const data_bonne_reponse = data.question_bonne_reponse_def;
            setQuestion(data_question);
            setReponse_donnee(data_reponse_donnee);
            setBonne_reponse(data_bonne_reponse);
        }
        correction();
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
                    {score===9||score===10 ?
                    <p className="result_size">Rang Or</p>:
                    score===7||score===8 ?
                    <p className="result_size">Rang Argent</p>:
                    score===5||score===6 ?
                    <p className="result_size">Rang Bronze</p>:
                    <div></div>
                    }
                    {question[0]!==""&&question[0]!==undefined&&question[0]!==null?
                    <div className="question_box">La réponse à la question : {question[0]}</div>:<div></div>}
                    {reponse_donnee[0]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[0]}</div>:<div></div>}
                    {bonne_reponse[0]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[0]}</div>:<div></div>}
                    {question[1]!==""&&question[1]!==undefined&&question[1]!==null?
                    <div className="question_box">La réponse à la question : {question[1]}</div>:<div></div>}
                    {reponse_donnee[1]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[1]}</div>:<div></div>}
                    {bonne_reponse[1]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[1]}</div>:<div></div>}
                    {question[2]!==""&&question[2]!==undefined&&question[2]!==null?
                    <div className="question_box">La réponse à la question : {question[2]}</div>:<div></div>}
                    {reponse_donnee[2]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[2]}</div>:<div></div>}
                    {bonne_reponse[2]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[2]}</div>:<div></div>}
                    {question[3]!==""&&question[3]!==undefined&&question[3]!==null?
                    <div className="question_box">La réponse à la question : {question[3]}</div>:<div></div>}
                    {reponse_donnee[3]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[3]}</div>:<div></div>}
                    {bonne_reponse[3]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[3]}</div>:<div></div>}
                    {question[4]!==""&&question[4]!==undefined&&question[4]!==null?
                    <div className="question_box">La réponse à la question : {question[4]}</div>:<div></div>}
                    {reponse_donnee[4]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[4]}</div>:<div></div>}
                    {bonne_reponse[4]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[4]}</div>:<div></div>}
                    {question[5]!==""&&question[5]!==undefined&&question[5]!==null?
                    <div className="question_box">La réponse à la question : {question[5]}</div>:<div></div>}
                    {reponse_donnee[5]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[5]}</div>:<div></div>}
                    {bonne_reponse[5]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[5]}</div>:<div></div>}
                    {question[6]!==""&&question[6]!==undefined&&question[6]!==null?
                    <div className="question_box">La réponse à la question : {question[6]}</div>:<div></div>}
                    {reponse_donnee[6]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[6]}</div>:<div></div>}
                    {bonne_reponse[6]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[6]}</div>:<div></div>}
                    {question[7]!==""&&question[7]!==undefined&&question[7]!==null?
                    <div className="question_box">La réponse à la question : {question[7]}</div>:<div></div>}
                    {reponse_donnee[7]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[7]}</div>:<div></div>}
                    {bonne_reponse[7]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[7]}</div>:<div></div>}
                    {question[8]!==""&&question[8]!==undefined&&question[8]!==null?
                    <div className="question_box">La réponse à la question : {question[8]}</div>:<div></div>}
                    {reponse_donnee[8]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[8]}</div>:<div></div>}
                    {bonne_reponse[8]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[8]}</div>:<div></div>}
                    {question[9]!==""&&question[9]!==undefined&&question[9]!==null?
                    <div className="question_box">La réponse à la question : {question[9]}</div>:<div></div>}
                    {reponse_donnee[9]!==undefined?
                    <div className="reponse_box">La réponse donnée est : {reponse_donnee[9]}</div>:<div></div>}
                    {bonne_reponse[9]!==undefined?
                    <div className="bonne_reponse">La bonne réponse est : {bonne_reponse[9]}</div>:<div></div>}
                </div>
            </div>
            <div className="bot_buttons_inscription">
            <Link to='/send_email'>
                <button type='submit' className={"button_purple bord_right"}>Valider</button>
            </Link>
            </div>
        </div> 
    );
};

export default Results;