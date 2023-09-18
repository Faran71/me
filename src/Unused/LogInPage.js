// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.css"

// const LogInPage = () => {
//     const navigate = useNavigate();

//     const [logInInformation, setLogInInformation] = useState({
//         username:"Faran",
//         password:"12345"
//     })
//     const [tempUsername, setTempUsername] = useState("");
//     const [tempPassword, setTempPassword] = useState("");

//     const handleFormSubmition = (event) => {
//         event.preventDefault();
//         if(logInInformation.username === tempUsername && logInInformation.password === tempPassword){
//             navigate("/MainPage")
//             setSafeToEnter(true);
//         }
//     }

//     return(
//         <div className="log-in">
//             <div>
//                 <img src={require("./image.png")} alt="No picture"/>
//             </div>
//             <form onSubmit={handleFormSubmition}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={tempUsername}
//                     onChange={(e) => setTempUsername(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={tempPassword}
//                     onChange={(e) => setTempPassword(e.target.value)}
//                 />
//                 <button type="submit">LOG IN</button>
//             </form>
//         </div>
//     )

// }

// export default LogInPage;