import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const MainPage = ({safeToEnter}) => {
    const navigate = useNavigate();



    if(safeToEnter){
        return(
            <div className="main-page">
                <header>
                    <button onClick={() => navigate("/Games")}>Games</button>
                    <button onClick={() => navigate("/Fact")}>Fact</button>
                    <button onClick={() => navigate("/Games")}>Games</button>
                    <button onClick={() => navigate("/Games")}>Games</button>
                </header>
                <h2>Main Page</h2>
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

export default MainPage;