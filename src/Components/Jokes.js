import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Jokes = ({safeToEnter}) => {

    const navigate = useNavigate();

    const [joke, setJoke] = useState({});
    const [isHidden, setIsHidden] = useState(true);

    const fetchJoke = async() => {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await response.json();
        setJoke(data);
    }

    useEffect(() => {
        fetchJoke();
    },[])

    if(safeToEnter){
        return(
            <div className="joke">
                <div className="joke-box">
                    <p>{joke.setup}</p>
                    <p hidden={isHidden}>{joke.punchline}</p>
                    <button onClick={() => setIsHidden(!isHidden)}>Reveal Punchline</button>
                    <button onClick={() => {fetchJoke();setIsHidden(true)}}>Click for more</button>
                </div>
                <div className="joke-return">
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

export default Jokes;