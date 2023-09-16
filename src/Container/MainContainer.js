import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";
import LogInPage from "../Components/LogInPage";
import MainPage from "../Components/MainPage";
import { useState } from "react";
import Jokes from "../Components/Jokes";
import Fact from "../Components/Fact";
import Quote from "../Components/Quote";
import AgeGuess from "../Components/AgeGuess";

const MainContainer = () => {

    const [safeToEnter, setSafeToEnter] = useState(false);

    return(
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<LogInPage setSafeToEnter={setSafeToEnter}/>} key={1} />
                    <Route path="/MainPage" element={<MainPage safeToEnter={safeToEnter}/>} key={2} />
                    <Route path="/Jokes" element={<Jokes safeToEnter={safeToEnter}/>} key={3} />
                    <Route path="/Fact" element={<Fact safeToEnter={safeToEnter}/>} key={4} />
                    <Route path="/Quote" element={<Quote safeToEnter={safeToEnter}/>} key={5} />
                    <Route path="/AgeGuess" element={<AgeGuess safeToEnter={safeToEnter}/>} key={6} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )

}

export default MainContainer;