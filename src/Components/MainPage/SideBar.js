import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"

const SideBar = ({isOpen, toggleSidebar}) => {
  const navigate = useNavigate();

  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
        <div className="slidebar-content">
          <button onClick={() => navigate("/Jokes")} className="btn">Jokes</button>
          <button onClick={() => navigate("/Fact")} className="btn">Fact</button>
          <button onClick={() => navigate("/Quote")} className="btn">Quote</button>
          <button onClick={() => navigate("/AgeGuess")} className="btn">Age Guesser</button>
          <button onClick={toggleSidebar} className="btn">Toggle Sidebar</button>
        </div>

        <button onClick={toggleSidebar} className="sidebar-toggle">
            Toggle Sidebar
        </button>
    </div>
  );
};
export default SideBar;
