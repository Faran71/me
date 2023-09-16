import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const AgeGuess = ({safeToEnter}) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [info, setInfo] = useState(
        {
            "count": 0,
            "name": "",
            "age": 0
          }
    );

    const fetchInfo = async () => {
        const response = await fetch("https://api.agify.io/?name="+name)
        const data = await response.json();
        setInfo(data);
    }

    const handleFormSubmition = (event) => {
        event.preventDefault();
        fetchInfo();
    }
    

    if(safeToEnter){
        return(
            <div className="age">
                <form onSubmit={handleFormSubmition}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Find My Age</button>
                </form>
                <div>
                    <p>{info.age}</p>
                </div>
                <div className="age-return">
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

export default AgeGuess;