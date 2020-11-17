import React, { useState, useContext } from 'react';
import axios from "axios";
import { ContextUser } from './Contexto';
import decode from 'jwt-decode';

export const Home = () => {
  const contexto = useContext(ContextUser);
  const [logError, setlogError] = useState();
  const start = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = {};
    for (let input of formData.entries()) { user[input[0]] = input[1]; }

    axios.post("api/auth/signin", user)
      .then(response => {
        // console.log(contexto)
        contexto.setisAuth(true);
        contexto.settoken(response.data.token);
        let id = decode(response.data.token);
        contexto.setid(id.id);
      })
      .catch(error => {
        setlogError(error.response.data.msg);
        console.log(error.response.data.msg);
      });
  };
  return (
    <form onSubmit={start}>
      <input type="email" name="email" defaultValue="admin@localhost" />
      <input type="password" name="pass" autoComplete="true" defaultValue="admin" />
      <button>Log In</button>
      {logError}
      <div>hola</div>
    </form>
  );
};
