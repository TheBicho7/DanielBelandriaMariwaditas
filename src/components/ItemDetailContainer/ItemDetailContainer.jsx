import React from "react";
import Card from "../Card/Card";
import { getProducts, productos } from "../DateBase/dataBase"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import dataBase from "../DateBase/dataBase"

function ItemDetailContainer(props) {
  const [producto, setProduct] = useState([]);

const { id } = useParams();
console.log(id);

  useEffect(() => {
    const getData = () => {
      return getProducts((resolve) => {
        setTimeout(() =>{
          resolve(productos)
        },3000);
      })
    }
  },[id])
  return(
    <div className="container">
      <CardDetail producto={producto}/>
    </div>
  );
};
export default ItemDetailContainer;