import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Fact = ({safeToEnter}) => {

    const navigate = useNavigate();

    const [fact, setFact] = useState({});

    const fetchFact = async() => {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        const data = await response.json();
        setFact(data);
    }

    useEffect(() => {
        fetchFact();
    },[])

    if(safeToEnter){
        return(
            <div className="fact">
                <div className="fact-box">
                    <p>{fact.text}</p>
                    <button onClick={() => fetchFact()}>Click for more</button>
                </div>
                <div className="fact-return">
                    <button onClick={() => navigate("/MainPage")}>Return to Main Page</button>
                </div>
                
            </div>
        )
    } else {
        return(
            <div className="back-to-log-in">
                <p>Please Log In</p>
                <button onClick={() => navigate("/")}>Click Me To Log In</button>
                
            </div>
        )
    }

}

export default Fact;