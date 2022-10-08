import React from "react";
import Card from "../Card/Card";
import { getOneProduct } from "../DateBase/dataBase"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import dataBase from "../DateBase/dataBase"

function ItemListContainer(props) {
  const [producto, setProduct] = useState([]);

const { id } = useParams();

  useEffect(() => {
    getOneProduct().then((productos) => {
      setProduct(productos);
    });
  },[id]);

  return (
    <div className="container">
      <CardDetail 
      title={producto.title} 
      img={producto.img} 
      price={producto.price}  
      detail={producto.detail} 
      />;
    </div>
    
  );
};


export default ItemListContainer; 