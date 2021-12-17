import React from "react";
import teslaLogo from "../../assets/logo.svg";
import classes from "./Header.module.css";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
  },
});

const Header = () => {
  const materialUIClass = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  let closeTransition = false;

  const closeMenuHandler = () => {
    setShowMenu(false);
    closeTransition = true;
  };
  const showmenuHandler = () => {
    setShowMenu(true);
  };
  let className = closeTransition ? classes.fadeout : "";
  const menu = (
    <Fade right>
      <div className={`${classes["burger-nav"]} ${className}`}>
        <button className={classes["svg-btn"]} onClick={closeMenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["cancel-icon"]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <li>
          <a href="">Existing Investory</a>
        </li>
        <li>
          <a href="">Used Investory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">CyberTruck</a>
        </li>
        <li>
          <a href="">Roadaster</a>
        </li>
        <li>
          <a href="">Existing Investory</a>
        </li>
        <li>
          <a href="">Existing Investory</a>
        </li>
        <li>
          <a href="">Existing Investory</a>
        </li>
      </div>
    </Fade>
  );

  return (
    <div className={classes.container}>
      <a href="">
        <img src={teslaLogo} alt="Tesla Logo" />
      </a>
      <div className={classes.menu}>
        <a href="#">Model S</a>
        <a href="#">Model x</a>
        <a href="#">Model S</a>
        <a href="#">Model S</a>
      </div>
      <div className={classes.rightmenu}>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="">Menu</a>
        <button className={classes["menu-btn"]} onClick={showmenuHandler}>
          <MenuIcon classes={materialUIClass} />
        </button>
        {showMenu && menu}
      </div>
    </div>
  );
};

export default Header;
