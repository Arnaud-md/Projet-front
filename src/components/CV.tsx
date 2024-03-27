import { useCallback, useEffect, useState } from "react";
import cup_or from "../img/coupe_or.jpg";
import cup_argent from "../img/coupe_argent.jpg";
import cup_bronze from "../img/coupe_bronze.jpg";
import { useNavigate } from "react-router-dom";

const CV = () => {
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [email,setEmail] = useState("");
    const [ismasculin,setIsmasculin] = useState(true);
    const [filiere,setFiliere] = useState("");
    const [mention,setMention] = useState("");
    const [etudes,setEtudes] = useState("");
    const [score,setScore] = useState(-1);
    const [subject,setSubject] = useState("");
    
    import.meta.env.VITE_PORT;
    const port = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT as string) : 1337
    const token = localStorage.getItem("token")?.toString() as string | "";
    const QuizzId = localStorage.getItem("QuizzId");
    const navigate = useNavigate();

    useEffect(()=> {
        const user = async()=> {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json'); 
            myHeaders.append('Authorization', "Bearer "+token); 
            const response = await fetch(('http://localhost:'+port+'/api/users/me'), {
                headers: myHeaders
            })
            
            if (response.status===200) {
            const data = await response.json();
                setNom(data.nom);
                setPrenom(data.prenom);
                setEmail(data.email);
                setIsmasculin(data.ismasculin);
            
                setFiliere(data.filiere);
                setMention(data.mention);
                setEtudes(data.etudes);
            }
            else {
                navigate("/blank");
            }
        }
        user();
    },[])

    useEffect(()=> {
        const scoreFunction = async()=> {
            const response = await fetch(('http://localhost:'+port+'/api/quizz/'+QuizzId+'/result'), {
            })
            const data = await response.json();
            setScore(data.score);
            setSubject(data.subject);
        }
        scoreFunction();
    },[])

    const handleClick=useCallback(()=>{
        window.print();
    },[])

    return (
        <div>
            <div className="title_CV">CV de compétences en</div>
            <div className="title_CV margin_title_bottom"> {subject}</div>
            {ismasculin?
                <div className="description_bac">Monsieur {prenom} {nom} a un baccalauréat</div>:
                <div className="description_bac">Madame {prenom} {nom} a un baccalauréat</div>
            }
            <div className="description_bac">dont la filière est :</div>
            <div className="bold"> {filiere}</div><div className="description_bac"> avec la mention :</div><div className="bold margin_cv_bottom"> {mention}</div>
            <div className="description_email margin_cv_bottom">Son email est : {email}</div>
            <div className="description_etudes">La description de ses études est :</div><div className="bold margin_cv_bottom"> {etudes}</div>
            {ismasculin?
                <p className="description_score">Monsieur {prenom} {nom} a obtenu</p>:
                <p className="description_score">Madame {prenom} {nom} a obtenu</p>
            }
            <p className="description_score"> la note de</p>
            <p className="bold">{score}/10</p><p className="description_score margin_cv_bottom"> au questionnaire de {subject}</p>
            {score===10||score===9?
                <div className="img_cup_cv_div"><img src={cup_or} className="img_cup_cv"></img></div>:
                score===8||score===7?
                    <div className="img_cup_cv_div"><img src={cup_argent} className="img_cup_cv"></img></div>:
                    score===6||score===5?
                        <div className="img_cup_cv_div"><img src={cup_bronze} className="img_cup_cv"></img></div>:
                        <div></div>
            }
            {score===10||score===9?
                <div className="description_rang">Rang Or</div>:
                score===8||score===7?
                    <div className="description_rang">Rang Argent</div>:
                    score===6||score===5?
                        <div className="description_rang">Rang Bronze</div>:
                        <div></div>
            }
            <div className="bot_buttons">
            <form action="http://localhost:5173/home">
                <button className={"button_purple bord_right"}>Accueil</button>
            </form>
                <div className="cv_center_div"><button className={"button_purple"} onClick={handleClick}>Print</button></div>
            </div>
        </div> 
);

};
export default CV;