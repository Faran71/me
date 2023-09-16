import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";
import LogInPage from "../Components/LogInPage";
import MainPage from "../Components/MainPage";
import { useState } from "react";
import Games from "../Components/Games";
import Fact from "../Components/Fact";

const MainContainer = () => {

    const [safeToEnter, setSafeToEnter] = useState(false);

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogInPage setSafeToEnter={setSafeToEnter}/>} key={1} />
                    <Route path="/MainPage" element={<MainPage safeToEnter={safeToEnter}/>} key={2} />
                    <Route path="/Games" element={<Games safeToEnter={safeToEnter}/>} key={3} />
                    <Route path="/Fact" element={<Fact safeToEnter={safeToEnter}/>} key={4} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )

}

export default MainContainer;