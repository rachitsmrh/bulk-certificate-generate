// Menu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // For styling
import temp from "../../assets/temp.png";
import sheet from "../../assets/sheet.png";
import edit from "../../assets/edit.png";
import view from "../../assets/view.png";

function Menu() {
  console.log("menu");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/templates" onClick={toggleMenu}>
            <img className="menu-image" src={temp} alt="" />
          </Link>
        </li>

        <li>
          <Link to="/sheet" onClick={toggleMenu}>
            <img className="menu-image" src={sheet} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/edit" onClick={toggleMenu}>
            <img className="menu-image" src={edit} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/view" onClick={toggleMenu}>
            <img className="menu-image" src={view} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Menu);
