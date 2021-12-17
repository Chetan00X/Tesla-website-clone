import React from "react";
import classes from "./Section.module.css";
import Wraper from "../UI/Wraper";
import svgArrow from "../../assets/down-arrow.svg";
import Header from "./Header";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  let className = "";

  if (props.backgroundImg === "model-s.jpg") className = classes.modelS;

  if (props.backgroundImg === "model-x.jpg") className = classes.modelX;

  if (props.backgroundImg === "model-y.jpg") className = classes.modelY;

  if (props.backgroundImg === "solar-panel.jpg") className = classes.solarPanel;

  if (props.backgroundImg === "solar-roof.jpg") className = classes.solarRoof;

  if (props.backgroundImg === "accessories.jpg")
    className = classes.accessories;

  return (
    <Wraper className={className}>
      <nav>
        <Header />
      </nav>
      <Fade bottom>
        <div className={classes["item-text"]}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </Fade>
      <div>
        <Fade bottom>
          <div className={classes["btn-group"]}>
            <div className={`${classes.btn} ${classes.btnRight}`}>
              {props.rightBtnText}
            </div>
            <div className={`${classes.btn} ${classes.btnLeft}`}>
              {props.leftBtnText}
            </div>
          </div>
        </Fade>
        <img src={svgArrow} alt="This is a aero" className={classes.svgArrow} />
      </div>
    </Wraper>
  );
};
export default Section;
