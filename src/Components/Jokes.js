import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jokes.css"

const Jokes = () => {

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

        return(
            <div className="joke">
                <div className="joke-box">
                    <p>{joke.setup}</p>
                    <p hidden={isHidden}>{joke.punchline}</p>
                    <button onClick={() => setIsHidden(!isHidden)}>Reveal Punchline</button>
                    <button onClick={() => {fetchJoke();setIsHidden(true)}}>Click for more</button>
                </div>
                <div className="joke-return">
                    <button onClick={() => navigate("/")}>Return to Main Page</button>
                </div>
                
            </div>
        )
} 


export default Jokes;