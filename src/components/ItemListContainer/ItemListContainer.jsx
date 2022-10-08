import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemlistcontainer.css";
import { getProducts, getProductsByCategory } from "../DateBase/dataBase"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productList, setProductList] = useState([]);
  const params = useParams();
  const categoryId = params.categoryId;

  useEffect(() => {
    if (categoryId === undefined) {
    getProducts().then((productos) => {
      setProductList(productos);
    });
  } else {
    getProductsByCategory(categoryId).then((productos) => {
      setProductList(productos);
    });
  }
}, [categoryId]);

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