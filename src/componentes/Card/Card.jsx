import React, { Fragment } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ id, title, price, image }) => {
  return (
    <Fragment>
      <div className="card">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>U$S {price}</p>
        <Link to={`/Producto/${id}`}>
          <button>Ver</button>
        </Link>
      </div>
    </Fragment>
  );
};
export default Card;
