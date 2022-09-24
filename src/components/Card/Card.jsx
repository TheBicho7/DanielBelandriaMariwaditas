import Button from "../Button/Button";
import "./card.css";

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

        <Button otraprop="otraprop">{`agregar al carrito`}</Button>
      </div>
    </>
  );
}