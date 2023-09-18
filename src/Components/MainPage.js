import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"
import mountain_image from "./mountain_image.jpg"

const MainPage = () => {
    const navigate = useNavigate();


        return(
            <div className="main-page">
                <header>
                    <button onClick={() => navigate("/Jokes")} className="btn">Jokes</button>
                    <button onClick={() => navigate("/Fact")} className="btn">Fact</button>
                    <button onClick={() => navigate("/Quote")} className="btn">Quote</button>
                    <button onClick={() => navigate("/AgeGuess")} className="btn">Age Guesser</button>
                </header>
                <div className="collection">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={mountain_image} alt="Avatar"  />
                            </div>
                            <div class="flip-card-back">
                                <h1>A</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={mountain_image} alt="Avatar"  />
                            </div>
                            <div class="flip-card-back">
                                <h1>B</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={mountain_image} alt="Avatar"  />
                            </div>
                            <div class="flip-card-back">
                                <h1>C</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    

}

export default MainPage;