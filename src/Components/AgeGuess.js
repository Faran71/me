import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgeGuess.css"

const AgeGuess = () => {
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
                    <button onClick={() => navigate("/")}>Return to Main Page</button>
                </div>
                
            </div>
        )

}

export default AgeGuess;