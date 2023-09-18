import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quote.css"

const Quote = () => {

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


        return(
            <div className="quote">
                <div className="quote-box">
                    <p>{quote.content}</p>
                    <p>Author: {quote.author}</p>
                    <button onClick={() => fetchQuote()}>Click for more</button>
                </div>
                <div className="quote-return">
                    <button onClick={() => navigate("/")}>Return to Main Page</button>
                </div>
                
            </div>
        )
}

export default Quote;