import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Card = ({id, nombre, email, address, phone}) => (
  <div className="card mb-3" style={{maxWidth: "540px"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://picsum.photos/200" className="img-fluid rounded-start" alt={nombre} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            {email}
          </p>
          <p className="card-text">
            {address}
          </p>
          <p className="card-text">
            {phone}
          </p>
        </div>
      </div>
    </div>
  </div>
);
