import React, { useState } from "react";
import "./Sidebar.css";
import { BsFillGrid1X2Fill, BsBoxArrowInRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [activation, setActivation] = useState(false);
  const active = () => {
    setActivation(true);
  };
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <div className="sidebar_menu">
        <div className="sidebar_logo">LOGO</div>
        <div onClick={active} className="menu_details active">
          <div className="icon">
            <BsFillGrid1X2Fill />
          </div>
          <div className="menu_text"> Songs</div>
        </div>
      </div>

      <div className="logout">
        <div className="icon">
          <BsBoxArrowInRight />
        </div>
        <div className="menu_text">
          {" "}
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
