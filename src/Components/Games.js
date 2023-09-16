import { useNavigate } from "react-router-dom";
import "../App.css"

const Games = ({safeToEnter}) => {
    const navigate = useNavigate();

    if(safeToEnter){
        return(
            <div>
                <h1>Games will appear soon</h1>
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

export default Games;