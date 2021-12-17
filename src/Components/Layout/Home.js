import React from "react";
import Section from "./Section";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.container}>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        showHeader={true}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        showHeader={false}
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        showHeader={false}
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        showHeader={false}
      />
      <Section
        title="Solar for New Roofs"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        showHeader={false}
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order now"
        rightBtnText=""
        showHeader={false}
      />
    </div>
  );
};

export default Home;
