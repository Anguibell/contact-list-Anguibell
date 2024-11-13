import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const AddContact = () => {

    const {actions, store} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const addContact = async (e) => {
        e.preventDefault()
        let data = {
            'email': email,
            'name': name,
            'phone': phone,
            'address': address
        }
        let resp = await actions.createContact(data)
        if (resp) {
            navigate('/')
        }
    }

  return (
    <div className="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Phone
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Address
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-primary" onClick={(e)=>addContact(e)}>
        Submit
      </button>
    </div>
  );
};

export default AddContact;
