import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"

const MainPage = () => {
    const navigate = useNavigate();


        return(
            <div className="main-page">
                <header>
                    <button onClick={() => navigate("/Jokes")}>Jokes</button>
                    <button onClick={() => navigate("/Fact")}>Fact</button>
                    <button onClick={() => navigate("/Quote")}>Quote</button>
                    <button onClick={() => navigate("/AgeGuess")}>Age Guesser</button>
                </header>
                <h2>Main Page</h2>
            </div>
        )
    

}

export default MainPage;