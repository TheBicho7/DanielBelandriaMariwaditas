import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import ItemCount from "../ItemCount/ItemCount";   
import "./itemdetail.css";

function CardDetail({ producto }) {
  return (
    <div className="detail-container">
      
        <div className="main container">
          <h1>{producto.title}</h1>
          <img src={producto.img} alt={producto.title} />
          <h3>$ {producto.price}</h3>
        </div>
        <ItemCount stock={producto.stock} initial={1} text="Agregar al carrito" />
    </div>
  );
}

export default CardDetail;