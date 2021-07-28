import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Type from "./Type";

import classes from "../Button/Button.module.css";
import "./Render.module.css";

const Render = () => {
  return (
    <div>
      <h1>Quote Generator</h1>
      <Card>
        <Button text="Generate Quote" className={classes.head} />
        <Type />
      </Card>
    </div>
  );
};

export default Render;
