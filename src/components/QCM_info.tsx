import { useCallback, useEffect, useState } from "react";

const QCM_info = () => {
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
    const isconnect = localStorage.getItem("isconnected");
    // const rd = Math.floor(Math.random()*20+1);
    const rd = 1;
    // console.log("random : ",rd);
    const rand = Math.floor(Math.random()*4+1);
    console.log("rand : ",rand);

    useEffect(()=> {
        const qcm = async()=> {
            const response = await fetch('http://localhost:1337/api/qcm/informatique/1', {
            })
            const data = await response.json()
            console.log("rtte", data)
                setQuestion(data.question);
                setReponseA(data.reponseA);
                setReponseB(data.reponseB);
                setReponseC(data.reponseC);
                setReponseD(data.reponseD);
                setBonnereponse(data.valide);
        }
        qcm();
        
    // Si la connexion est réussie,  stockez le token dans le localStorage
    // Et redirigez l'utilisateur vers la page d'accueil

    // Si la connexion est échouée, affichez un message d'erreur
    
    }, [question,reponseA,reponseB,reponseC,reponseD,bonnereponse]);
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
                    <div>
                        <p>Question 1 : </p>
                        <p>{question}</p>
                        <input onClick={handleChangeA} checked={choicea} type="radio" className="radio"></input>
                        <p>{reponseA}</p>
                        <input onClick={handleChangeB} checked={choiceb} type="radio" className="radio"></input>
                        <p>{reponseB}</p>
                        <input onClick={handleChangeC} checked={choicec} type="radio" className="radio"></input>
                        <p>{reponseC}</p>
                        <input onClick={handleChangeD} checked={choiced} type="radio" className="radio"></input>
                        <p>{reponseD}</p>
                    </div>
                    <div className="bot_buttons">
                        <form action="http://localhost:5173/entreprises">
                            <button type="submit" className="button_purple">Entreprises</button>
                        </form>
                        <form action="http://localhost:5173/type_de_qcm">
                            <button type="submit" className="button_purple">QCM</button>
                        </form>
                        <form action="http://localhost:5173/connexion">
                            <button type="submit" className="button_purple">Connexion</button>
                        </form>
                    </div>
                </div> 
            </div>
        );
    };
    
    export default QCM_info;