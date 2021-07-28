import React from "react";
import Button from "../Button/Button";

import classes from "../Button/Button.module.css";

const TypesOfQuotes = (props) => {
  return (
    <div>
      <Button text="Life" className={classes.life} />
      <Button text="Time" className={classes.time} />
      <Button text="Hard Work" className={classes["hard-work"]} />
      <Button text="Attitude" className={classes.attitude} />
      <Button
        text="Failures"
        className={classes.failure}
      />
    </div>
  );
};

export default TypesOfQuotes;
