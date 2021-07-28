import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import RenderQuote from "./RenderQuote";

import "./Render.module.css";

const Render = () => {
  return (
    <div>
      <h1>Quote Generator</h1>
      <Card>
        <Button />
        <RenderQuote />
      </Card>
    </div>
  );
};

export default Render;
