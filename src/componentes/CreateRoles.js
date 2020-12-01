import React, { useContext } from 'react';
import axios from "axios";
import { ContextUser } from '../Contexto';

export const CreateRoles = () => {

  const contexto = useContext(ContextUser);
  const token = contexto.token;
  const options = { headers: { 'x-access-token': token } };
  // const [response, setresponse] = useState('');

  const crearRol = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rol = {};
    for (let input of formData.entries()) {
      rol[input[0]] = input[1];
    }
    axios.post("api/role", rol, options)
      .then(response => {
        console.log(response)
        contexto.setfetch(true);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div className="container">
      <form onSubmit={crearRol}>
        <h3>Formulario para la creacion de nuevo roles </h3>
        <div className="input-field">
          <label>nombre del rol</label>
          <input type="text" name="name"></input>
          <span> Introduzca nombre descriptivo para el rol</span>
        </div>
        <div className="input-field">
          <label>description</label>
          <input type="text" name="description"></input>
        </div>
        <button className="btn waves-effect waves-light right" type="submit">crear rol
          <i className="material-icons right">send</i>
        </button>
      </form>
      <pre>roles{JSON.stringify(contexto.rols, ["name", "description"], 1)}</pre>
    </div>
  );
};
