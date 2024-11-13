import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card";
import EditContact from "../component/editContact.js";

export const Home = () => {
  const { actions, store } = useContext(Context);
  const [edit, setEdit] = useState({
	showModal: false,
	id: undefined
  })

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
			edit={()=> setEdit({showModal: true, id:item.id})}
			/>
		))}
	  </div>
	  <EditContact
	  	id={edit.id}
		showModal={edit.showModal}
		onClose={()=> setEdit({showModal:false})}
	  />
    </div>
  );
};
