import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import.meta.env.VITE_PORT;
const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337

const QCM_physique_plasmas = () => {
    const [question,setQuestion]=useState("");
    const [numPage, setNumPage]=useState(1);
    const [choiceCheckbox, setChoiceCheckbox]=useState(0);
    const [reponse, setReponse]=useState([] as String[]);
    const [quizzId,setQuizzId]=useState(0);

    const isconnect = localStorage.getItem("isconnected");
    const navigate = useNavigate();
    useEffect(()=> {
        const quizzCreation = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz/physique-des-plasmas'), {
                headers: new Headers({
                    "Content-Type": "application/json",
                  }),
                  method: "POST",
            })
            const data = await response.json()
            setQuizzId(data.id);
        }
          quizzCreation();
    },[])
    useEffect(()=> {
        if(numPage<=10) {
            if(quizzId!==0&&quizzId) {
                const qcm = async()=> {
                    const resp = await fetch(('http://localhost:'+port+'/api/quizz/'+quizzId+'/question'), {
                    })
                    const dataQuizz = await resp.json();

                    setQuestion(dataQuizz.question);
                    setReponse([dataQuizz.reponseA,dataQuizz.reponseB,dataQuizz.reponseC,dataQuizz.reponseD]);
                    setChoiceCheckbox(0);
                }
                qcm();
            }
        }
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
        if(choiceCheckbox!==0) {
            if(numPage!==10) {
                const response = await fetch('http://localhost:'+port+'/api/quizz/'+quizzId+'/reponse/'+choiceCheckbox, {
                    headers: new Headers({
                        "Content-Type": "application/json",
                    }),
                    method: "POST",
                })
            const newResponse = await response.json();
            }
            if(numPage===10) {
                const response = await fetch('http://localhost:'+port+'/api/quizz/'+quizzId+'/reponse/'+choiceCheckbox, {
                    headers: new Headers({
                        "Content-Type": "application/json",
                    }),
                    method: "POST",
                })
                const newResponse = await response.json();
                localStorage.setItem("QuizzId",quizzId.toString());
                navigate("/results/");
            }
            else {
            setNumPage(numPage+1);
            }
        }
    },[numPage,quizzId,choiceCheckbox]);

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
                        <h1>QCM de physique des plasmas</h1>
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
    
    export default QCM_physique_plasmas;