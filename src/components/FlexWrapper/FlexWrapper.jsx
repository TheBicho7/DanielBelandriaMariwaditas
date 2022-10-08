import React from "react";
import Card from "../Card/Card";

function FlexWrapper(props) {
  return (
    <div>
      <h1>Nuevos Productos</h1>
      <div className="flex">{props.children}</div>
    </div>
  );
}

export default FlexWrapper;