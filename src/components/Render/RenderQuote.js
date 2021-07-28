import React from "react";
import Card from "../Card/Card";

import classes from "./RenderQuote.css";

const RenderQuote = (props) => {
  return (
    <Card>
      <h3>{props.quote}</h3>
      <p className={classes.align}>- {props.who}</p>
    </Card>
  );
};

export default RenderQuote;
