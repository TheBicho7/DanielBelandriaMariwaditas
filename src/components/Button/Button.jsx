import "./button.css";
import { useState, useEffect } from "react";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState({
    backgroundColor: props.color,
  });


  function handleClick() {
    setColorBtn({ backgroundColor: "rgb(255, 50, 50)" });
  }

  return (
    <button onClick={handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  );
}