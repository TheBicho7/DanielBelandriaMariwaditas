import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props);

  return (
    <>
      <div className="card">
      <h2>{props.title}</h2>
        <div className="card-img">
          <img src={props.img} alt=""></img>
        </div>
        <div className="card-detail">
          <h4>$ {props.price}</h4>
        </div>
        <Link to={`/detail/${props.id}`}>
        <Button color={props.color}>{`agregar al carrito`}</Button>
        </Link>
      </div>   
    </>
  );
}