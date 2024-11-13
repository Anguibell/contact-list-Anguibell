import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({ id, nombre, email, address, phone, edit }) => {
  const { actions, store } = useContext(Context);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/200"
            className="img-fluid rounded-start"
            alt={nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{nombre}</h5>
              <div>
                <button
                  className="btn btn-outline-dark me-2"
                  onClick={() => edit()}
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  <i className="fa fa-pen"></i>
                </button>
                <button
                  className="btn btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <p className="card-text">{email}</p>
            <p className="card-text">{address}</p>
            <p className="card-text">{phone}</p>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Borrar Contacto
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Desea borrar a {nombre}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => actions.deleteContact(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
