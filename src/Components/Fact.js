import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fact.css"

const Fact = () => {

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

        return(
            <div className="fact">
                <div className="fact-box">
                    <p>{fact.text}</p>
                    <button onClick={() => fetchFact()}>Click for more</button>
                </div>
                <div className="fact-return">
                    <button onClick={() => navigate("/")}>Return to Main Page</button>
                </div>
                
            </div>
        )

}

export default Fact;