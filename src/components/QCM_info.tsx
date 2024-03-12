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
    const [choiceCheckbox, setChoiceCheckbox]=useState([] as boolean[]);
    const [reponse, setReponse]=useState([] as String[]);
    //const [choixReponse, setChoixReponse]=useState("");
    const [quizzId,setQuizzId]=useState(0);

    const isconnect = localStorage.getItem("isconnected");
    const navigate = useNavigate();
    useEffect(()=> {
        let randomNumbers:number[];
        let firstRand = Math.floor(Math.random()*30+1);
        randomNumbers = [firstRand];
        for(let i=1;i<10;i++) {
            let rand = Math.floor(Math.random()*30+1);
            while (randomNumbers.includes(rand)) {
                rand = Math.floor(Math.random()*30+1);
            }
            randomNumbers.push(rand);
        }
        const quizzCreation = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz'), {
                headers: new Headers({
                    "Content-Type": "application/json",
                  }),
                  method: "POST",
                  body: JSON.stringify({
                    idq1: randomNumbers[0],
                    idq2: randomNumbers[1],
                    idq3: randomNumbers[2],
                    idq4: randomNumbers[3],
                    idq5: randomNumbers[4],
                    idq6: randomNumbers[5],
                    idq7: randomNumbers[6],
                    idq8: randomNumbers[7],
                    idq9: randomNumbers[8],
                    idq10: randomNumbers[9]
                  }),
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            setQuizzId(data.id);
        }
          
          quizzCreation();
          
    },[])
    console.log("quizzId : ",quizzId);
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
            const qcm = async()=> {
                const resp = await fetch(('http://localhost:'+port+'/api/quizz/'+quizzId), {
                })
                const dataQuizz = await resp.json();
            
                let index = numPage;
                let idquestion = "idq"+index;
                let questionId = dataQuizz[idquestion];
                const response = await fetch(('http://localhost:'+port+'/api/qcm/informatique/'+questionId), {
                })
                const data = await response.json();
                console.log("DATA : ", data)
                setQuestion(data.question);
                setReponse([data.reponseA,data.reponseB,data.reponseC,data.reponseD]);
                setChoiceCheckbox([false,false,false,false]);
                //setNumPage(numPage+1);
            }
            qcm();
        //}
    }, [numPage, quizzId]);

    const handleChangeA = useCallback(() => {
        setChoiceCheckbox([!choiceCheckbox[0],choiceCheckbox[1],choiceCheckbox[2],choiceCheckbox[3]]);
    }, [choiceCheckbox]);
    const handleChangeB = useCallback(() => {
        setChoiceCheckbox([choiceCheckbox[0],!choiceCheckbox[1],choiceCheckbox[2],choiceCheckbox[3]]);
    }, [choiceCheckbox]);
    const handleChangeC = useCallback(() => {
        setChoiceCheckbox([choiceCheckbox[0],choiceCheckbox[1],!choiceCheckbox[2],choiceCheckbox[3]]);
    }, [choiceCheckbox]);
    const handleChangeD = useCallback(() => {
        setChoiceCheckbox([choiceCheckbox[0],choiceCheckbox[1],choiceCheckbox[2],!choiceCheckbox[3]]);
    }, [choiceCheckbox]);

    const handleClickSubmit = useCallback(async()=> {
        //setTabrand([...tabrand,rand]);
        
        //if(numPage!==9)
        const resp = await fetch(('http://localhost:'+port+'/api/quizz/'+quizzId), {
        })
        const dataQuizz = await resp.json();
        let index = numPage;
        let idquestion = "idq"+index;
        let questionId = dataQuizz[idquestion];
        const response = await fetch('http://localhost'+port+'/api/reponse', {
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify({
                user_id: "",
                quizz_id: quizzId,
                question_id: questionId,
                reponse_donnee: choiceCheckbox
            }),
        })
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
                        <input onClick={handleChangeA} checked={choiceCheckbox[0]} type="checkbox" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponse[0]}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeB} checked={choiceCheckbox[1]} type="checkbox" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponse[1]}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeC} checked={choiceCheckbox[2]} type="checkbox" className="radio_quiz"></input>
                        <span className="wrap"><p>{reponse[2]}</p></span>
                        </div>
                        <div className="response">
                        <input onClick={handleChangeD} checked={choiceCheckbox[3]} type="checkbox" className="radio_quiz"></input>
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