import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Contacts!</h1>
	  <div className="d-flex justify-content-center">
		{store.contacts.map((item) => (
			<Card
			key={item.id}
			id={item.id}
			nombre={item.name}
			email={item.email}
			address={item.address}
			phone={item.phone}
			/>
		))}
	  </div>
    </div>
  );
};
