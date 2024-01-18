import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'dotenv/config';
// import process from 'node:process';
import.meta.env.VITE_PORT;
const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337

const QCM_info = () => {
    // @ts-ignore
    const [numQuestion,setNumQuestion]=useState(0);
    const [question,setQuestion]=useState("");
    const[reponseA,setReponseA]=useState("");
    const[reponseB,setReponseB]=useState("");
    const[reponseC,setReponseC]=useState("");
    const[reponseD,setReponseD]=useState("");
    const[bonnereponse,setBonnereponse]=useState(0);
    const[choicea,setChoicea]=useState(false);
    const[choiceb,setChoiceb]=useState(false);
    const[choicec,setChoicec]=useState(false);
    const[choiced,setChoiced]=useState(false);
    const[tabrand,setTabrand]=useState([] as number[]);
    const[score,setScore]=useState(0);
    const[numPage,setNumPage]=useState(1);
    const isconnect = localStorage.getItem("isconnected");
    const navigate = useNavigate();
    let rand = Math.floor(Math.random()*30+1);
    let trouve=true;
        for(let i=0;i<tabrand.length;i++) {
            if(rand===tabrand[i]) {
                trouve=true;
                rand = Math.floor(Math.random()*30+1);
                i=0;
            }
            else {
                trouve=false;
            }
            if(trouve) {
                
            }
        }
    // console.log("random : ",rd);
     const randomnumber = Math.floor(Math.random()*4+1);
     console.log("randomnumber : ",randomnumber);
// 1337
    useEffect(()=> {
        const qcm = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/qcm/informatique/'+rand), {
            })
            const data = await response.json()
            console.log("rtte", data)
                setNumQuestion(data.numQuestion);
                setQuestion(data.question);
                setReponseA(data.reponseA);
                setReponseB(data.reponseB);
                setReponseC(data.reponseC);
                setReponseD(data.reponseD);
                setBonnereponse(data.valide);
                setChoicea(false);
                setChoiceb(false);
                setChoicec(false);
                setChoiced(false);
        }
        qcm();
        if(numPage===11) {
            navigate(("/results/"));
        }
    }, [tabrand,numPage]);

    const handleClickRandom = useCallback(async()=> {
        setTabrand([...tabrand,rand]);
        setNumPage(numPage+1);
        let sc = score;
        if((bonnereponse===1&&choicea&&!choiceb&&!choicec&&!choiced)||(bonnereponse===2&&!choicea&&choiceb&&!choicec&&!choiced)||
        (bonnereponse===3&&!choicea&&!choiceb&&choicec&&!choiced)||(bonnereponse===4&&!choicea&&!choiceb&&!choicec&&choiced)) {
                setScore(score+1);
                sc++;
        }
        
        if(numPage===9){
            const response = await fetch("http://localhost:8887/api/results", {
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                method: "POST",
                body: JSON.stringify({
                    email: "",
                    score: sc,
                    subject: "informatique"
                }),
            })
        
            console.log(response)
            const data = await response.json()
            console.log(data)
            console.log("sc : ",sc)
        } 
    },[tabrand]);

    const handleChangeA = useCallback(() => {
        setChoicea(!choicea);
    }, [choicea]);
    const handleChangeB = useCallback(() => {
        setChoiceb(!choiceb);
    }, [choiceb]);
    const handleChangeC = useCallback(() => {
        setChoicec(!choicec);
    }, [choicec]);
    const handleChangeD = useCallback(() => {
        setChoiced(!choiced);
    }, [choiced]);
    console.log("numPage : ",numPage);
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
                        <h1>QCM d'informatique</h1>
                    </div>
                    <div className="strait_purple margin_bottom"></div>
                    <div className="quiz">
                        <p>Question {numPage} : </p>
                        
                        <p className="question">{question}</p>
                        <div className="response">
                        <input onClick={handleChangeA} checked={choicea} type="radio" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponseA}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeB} checked={choiceb} type="radio" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponseB}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeC} checked={choicec} type="radio" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponseC}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeD} checked={choiced} type="radio" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponseD}</p></span>
                        </div>
                    </div>
                    <div className="bot_buttons">
                 
                            <button onClick={handleClickRandom} className="button_purple">{numPage===10 ? "Valider" : "Question suivante"}</button>
                   
                    </div>
                </div> 
            </div>
        );
    };
    
    export default QCM_info;