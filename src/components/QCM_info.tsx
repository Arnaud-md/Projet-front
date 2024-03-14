import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'dotenv/config';
// import process from 'node:process';
import.meta.env.VITE_PORT;
const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337

const QCM_info = () => {

    const [question,setQuestion]=useState("");
    // const[reponseA,setReponseA]=useState("");
    // const[reponseB,setReponseB]=useState("");
    // const[reponseC,setReponseC]=useState("");
    // const[reponseD,setReponseD]=useState("");
    // const[bonnereponse,setBonnereponse]=useState(0);
    // const[choicea,setChoicea]=useState(false);
    // const[choiceb,setChoiceb]=useState(false);
    // const[choicec,setChoicec]=useState(false);
    // const[choiced,setChoiced]=useState(false);
    // const[tabrand,setTabrand]=useState([] as number[]);
    // const[rand,setRand]=useState(0);
    // const[score,setScore]=useState(0);
    // const[numPage,setNumPage]=useState(1);
    const [numPage, setNumPage]=useState(1);
    const [choiceCheckbox, setChoiceCheckbox]=useState(0);
    const [reponse, setReponse]=useState([] as String[]);
    //const [choixReponse, setChoixReponse]=useState("");
    const [quizzId,setQuizzId]=useState(0);

    const isconnect = localStorage.getItem("isconnected");
    const navigate = useNavigate();
    useEffect(()=> {
        // let randomNumbers:number[];
        // let firstRand = Math.floor(Math.random()*30+1);
        // randomNumbers = [firstRand];
        // for(let i=1;i<10;i++) {
        //     let rand = Math.floor(Math.random()*30+1);
        //     while (randomNumbers.includes(rand)) {
        //         rand = Math.floor(Math.random()*30+1);
        //     }
        //     randomNumbers.push(rand);
        // }
        const quizzCreation = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz/informatique'), {
                headers: new Headers({
                    "Content-Type": "application/json",
                  }),
                  method: "POST",
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            setQuizzId(data.id);
        }
          
          quizzCreation();
          
    },[])
    //console.log("quizzId : ",quizzId);
    // useEffect(()=> {
    //     let rand2 = Math.floor(Math.random()*30+1);
    //     let trouve=true;
    //     for(let i=0;i<tabrand.length;i++) {
    //         if(rand2===tabrand[i]) {
    //             trouve=true;
    //             rand2 = Math.floor(Math.random()*30+1);
    //             i=0;
    //         }
    //         else {
    //             trouve=false;
    //         }
    //         // if(trouve) {
                
    //         // }
    //     }
    //     console.log('trouve',trouve);
    //     // setRand(rand2);
    // },[tabrand])
    // console.log("random : ",rd);
    //  const randomnumber = Math.floor(Math.random()*4+1);
    //  console.log("randomnumber : ",randomnumber);
// 1337
    useEffect(()=> {
        //if(numPage!==10) {
            if(quizzId!==0) {
                const qcm = async()=> {
                    const resp = await fetch(('http://localhost:'+port+'/api/quizz/'+quizzId+'/question'), {
                    })
                    const dataQuizz = await resp.json();
                    console.log("quizzId : ", quizzId);
                    console.log("dataQuizz : ",dataQuizz);
                    
                    setQuestion(dataQuizz.question);
                    setReponse([dataQuizz.reponseA,dataQuizz.reponseB,dataQuizz.reponseC,dataQuizz.reponseD]);
                    setChoiceCheckbox(0);

                    //setNumPage(numPage+1);
                }
                qcm();
            }
        //}
    }, [numPage, quizzId]);

    const handleChangeA = useCallback(() => {
        if(choiceCheckbox!==1) {
            setChoiceCheckbox(1);
        }
        else {
            setChoiceCheckbox(0);
        }
    }, [choiceCheckbox]);
    const handleChangeB = useCallback(() => {
        if(choiceCheckbox!==2) {
            setChoiceCheckbox(2);
        }
        else {
            setChoiceCheckbox(0);
        }
    }, [choiceCheckbox]);
    const handleChangeC = useCallback(() => {
        if(choiceCheckbox!==3) {
            setChoiceCheckbox(3);
        }
        else {
            setChoiceCheckbox(0);
        }
    }, [choiceCheckbox]);
    const handleChangeD = useCallback(() => {
        if(choiceCheckbox!==4) {
            setChoiceCheckbox(4);
        }
        else {
            setChoiceCheckbox(0);
        }
    }, [choiceCheckbox]);

    const handleClickSubmit = useCallback(async()=> {
        //setTabrand([...tabrand,rand]);
        
        //if(numPage!==9)
        const response = await fetch('http://localhost'+port+'/api/quizz/'+quizzId+'/reponse/'+choiceCheckbox, {
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            method: "POST",
        })
        const newResponse = await response.json();

        if(numPage===9) {
            navigate("/results");
        }
        setNumPage(numPage+1);
    },[numPage,quizzId]);
  
    //     let sc = score;
    //     if((bonnereponse===1&&choicea&&!choiceb&&!choicec&&!choiced)||(bonnereponse===2&&!choicea&&choiceb&&!choicec&&!choiced)||
    //     (bonnereponse===3&&!choicea&&!choiceb&&choicec&&!choiced)||(bonnereponse===4&&!choicea&&!choiceb&&!choicec&&choiced)) {
    //             setScore(score+1);
    //             sc++;
    //     }
        
    //     if(numPage===9){
    //         const response = await fetch("http://localhost:8887/api/results", {
    //             headers: new Headers({
    //                 "Content-Type": "application/json",
    //             }),
    //             method: "POST",
    //             body: JSON.stringify({
    //                 email: "",
    //                 score: sc,
    //                 subject: "informatique"
    //             }),
    //         })
        
    //         console.log(response)
    //         const data = await response.json()
    //         console.log(data)
    //         console.log("sc : ",sc)
    //     } 
    // },[tabrand,bonnereponse,choicea,choiceb,choicec,choiced,numPage,rand,score]);

 
    console.log("numPage : ",numPage);
    //console.log("score : ",score);
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
                        {choiceCheckbox===1?
                        <input onClick={handleChangeA} checked={true} type="checkbox" className="radio_quiz"></input>:
                        <input onClick={handleChangeA} checked={false} type="checkbox" className="radio_quiz"></input>}
                        <span className="wrap"><p>{reponse[0]}</p></span>
                        </div>
                        <div className="response">
                        {choiceCheckbox===2?
                        <input onClick={handleChangeB} checked={true} type="checkbox" className="radio_quiz"></input>:
                        <input onClick={handleChangeB} checked={false} type="checkbox" className="radio_quiz"></input>}
                        <span className="wrap"><p>{reponse[1]}</p></span>
                        </div>
                        <div className="response">
                        {choiceCheckbox===3?
                        <input onClick={handleChangeC} checked={true} type="checkbox" className="radio_quiz"></input>:
                        <input onClick={handleChangeC} checked={false} type="checkbox" className="radio_quiz"></input>}
                        <span className="wrap"><p>{reponse[2]}</p></span>
                        </div>
                        <div className="response">
                        {choiceCheckbox===4?
                        <input onClick={handleChangeD} checked={true} type="checkbox" className="radio_quiz"></input>:
                        <input onClick={handleChangeD} checked={false} type="checkbox" className="radio_quiz"></input>}
                        <span className="wrap"><p>{reponse[3]}</p></span>
                        </div>
                    </div>
                    <div className="bot_buttons">
                 
                            <button onClick={handleClickSubmit} className="button_purple">{numPage===10 ? "Valider" : "Question suivante"}</button>
                   
                    </div>
                </div> 
            </div>
        );
    };
    
    export default QCM_info;