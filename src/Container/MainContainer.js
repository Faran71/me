import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";
import MainPage from "../Components/MainPage";
import { useState } from "react";
import Jokes from "../Components/Jokes";
import Fact from "../Components/Fact";
import Quote from "../Components/Quote";
import AgeGuess from "../Components/AgeGuess";

const MainContainer = () => {

    // const [safeToEnter, setSafeToEnter] = useState(false);

    return(
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    {/* <Route path="/" element={<LogInPage setSafeToEnter={setSafeToEnter}/>} key={1} /> */}
                    <Route path="/" element={<MainPage />} key={1} />
                    <Route path="/Jokes" element={<Jokes />} key={1} />
                    <Route path="/Fact" element={<Fact />} key={2} />
                    <Route path="/Quote" element={<Quote />} key={4} />
                    <Route path="/AgeGuess" element={<AgeGuess />} key={5} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )

}

export default MainContainer;