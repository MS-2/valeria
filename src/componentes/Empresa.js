import React, { useState, useContext } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ContextUser } from '../Contexto';

export const Empresa = () => {
  const contexto = useContext(ContextUser);
  const options = { headers: { 'x-access-token': contexto.token } };
  const [response, setresponse] = useState();

  /** => funcion para crear empresa app @type {Object} */ /**/
  const crear = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const empresa = {} = formData.entries();

    for (let input of formData.entries()) {
      empresa[input[0]] = input[1];
    }
    axios.post("api/company", { "empresa": empresa }, options)
      .then(response => {
        setresponse("empresa creado con exito");
        const objeto = response.data;
        contexto.setcompanys(objeto);
        contexto.setfetch(true);
      })
      .catch(error => {
        setresponse("error faltan datos : " + error.response.data);
      });
  };

  return (
    <div className="container">
      <Form onSubmit={crear} style={{ margin: 20 }}>
        {response ? <div style={{ backgroundColor: "green", color: "white" }}>{response}</div> : null}
        <h3>
          campos basicos de registro empresas
       </h3>
        <div className="input-field">
          <input type="text" name="name"></input>
          <label htmlFor="name">Nombre Comercial</label>
        </div>

        <Form.Row>
          <Form.Group as={Col} controlId="rsocial">
            <Form.Label>Razon social:</Form.Label>
            <Form.Control type="text" name="rsocial" placeholder="razon social" />
          </Form.Group>

          <Form.Group as={Col} controlId="nit">
            <Form.Label>NIT:</Form.Label>
            <Form.Control type="text" name="nit" placeholder="numero de identificacion tributaria" defaultValue="123456" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="direccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" name="direccion" placeholder="1234 Main St" defaultValue="colpayo 849 piso 1 apt 4" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control placeholder="ciudad" name="city" defaultValue="buenos aires" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="zipcode" name="zip" defaultValue="1405" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="email-e">
          <Form.Label>Correo Electronico de la Empresa</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email-e" defaultValue="company@gmail.com" />
        </Form.Group>

        <Form.Group controlId="Telefono Empresarial">
          <Form.Label>Telefono Fijo</Form.Label>
          <Form.Control type="tel" placeholder="telefono de la empresa" name="telefono" defaultValue="1121607577" />
        </Form.Group>

        <Button variant="primary" type="submit">Guardar</Button>
      </Form>

      <pre>{JSON.stringify(contexto.companys, null, 2)}</pre>
    </div>

  );
};
