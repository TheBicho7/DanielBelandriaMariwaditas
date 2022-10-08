import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

//import ItemCount from "../ItemCount/ItemCount";   //  <ItemCount stock={curso.stock} initial={1} text="Agregar al carrito" /> //
import "./itemdetail.css";

function CardDetail({ producto }) {
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{producto.title}</h1>
          <img src={producto.img} alt={producto.title} />
          <h3>$ {producto.price}</h3>
        </div>
      
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;