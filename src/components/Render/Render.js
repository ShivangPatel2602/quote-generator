import React from "react";
import Card from "../Card/Card";
import Type from "./Type";

import "./Render.module.css";

const Render = () => {
  return (
    <div>
      <h1>Quote Generator</h1>
      <Card>
        <label>Generate Quote On</label>
        <Type />
      </Card>
    </div>
  );
};

export default Render;
