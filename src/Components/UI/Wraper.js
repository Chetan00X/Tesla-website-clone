import React from "react";
import classes from "./Wraper.module.css";

const Wraper = (props) => {
  return (
    <section
      className={`${classes.wrap} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Wraper;
