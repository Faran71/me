import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Quote = ({safeToEnter}) => {

    const navigate = useNavigate();

    const [quote, setQuote] = useState({});

    const fetchQuote = async() => {
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json();
        setQuote(data);
    }

    useEffect(() => {
        fetchQuote();
    },[])

    if(safeToEnter){
        return(
            <div className="quote">
                <div className="quote-box">
                    <p>{quote.content}</p>
                    <p>Author: {quote.author}</p>
                    <button onClick={() => fetchQuote()}>Click for more</button>
                </div>
                <div className="quote-return">
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

export default Quote;