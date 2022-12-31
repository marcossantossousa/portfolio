import classes from "./Navbar.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={classes.header} onClick={handleClick}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? classes.nav_menuactive : classes.nav_menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projeto">Projeto</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className={classes.ham_menu}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
