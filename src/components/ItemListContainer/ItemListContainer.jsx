import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemlistcontainer.css";
import { getProducts } from "../DateBase/dataBase"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((productos) => {
      setProductList(productos);
    });
  }, []);

  return (
    <div className="container">
      <h1>Mariwaditas</h1>
      <FlexWrapper className="flex">
        {productList.map(
          (item) => {
            return <Card key={item.id} id={item.id} title={item.title} img={item.img} price={item.price} />;
          }
        )}

      </FlexWrapper>
    </div>

  );
};


export default ItemListContainer; 