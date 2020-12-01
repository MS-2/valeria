import React, { useState, useContext } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ContextUser } from '../Contexto';


export const Usuario = () => {

  const contexto = useContext(ContextUser);
  const token = contexto.token;
  const options = { headers: { 'x-access-token': token } };
  const [response, setresponse] = useState('');
  const [component, setcomponent] = useState([]);
  const [mostrar, setmostrar] = useState(false);
  const [msgCss, setMsgCss] = useState("");
  const [msgTitle, setMsgTitle] = useState("");
  const [msgText, setMsgText] = useState("");

  const crear = async (e) => {
    e.preventDefault();
    setMsgTitle("usuario : ");
    setMsgCss("alert-success show");
    const formData = new FormData(e.target);
    const user = {};
    for (let input of formData.entries()) {
      user[input[0]] = input[1];
    }

    let clavesValor = Object.entries(user);
    // console.log(clavesValor);
    const res = clavesValor.filter(element => element[0] !== "pass" && element[0] !== "email" && element[0] !== "name");
    // console.log(res);
    let objectExtraInputs = Object.fromEntries(res);
    // console.log(objectExtraInputs);
    user["info"] = objectExtraInputs;

    axios.post("api/user", user, options)
      .then(response => {
        contexto.setfetch(true);
        setMsgText(response.data.name + " creado con exito");
        setMsgTitle("usuario : ");
        setMsgCss("alert-success show");
        setresponse(".");
      })
      .catch(error => {
        setMsgTitle("Atención! ");
        setMsgText(error.response.data.message);
        setMsgCss("alert-danger show");
        setresponse(".");
      });
  };

  const crearInput = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const put = {};
    for (let input of formData.entries()) {
      put[input[0]] = input[1];
    }
    const NuevoInput = () => {
      return (
        <>
          <label>{put.rotulo}</label>
          <form type="text" name={put.rotulo} required={put.check === "on" ? true : false}></form>
        </>
      );
    };
    console.log(component);
    setcomponent(oldArray => [...oldArray, <NuevoInput></NuevoInput>]);
    setmostrar(false);
  };

  const eliminarInput = (e) => {
    setcomponent(component.filter((currentValue, index, arr) => index !== e));
  };

  const FormularioDeRegistroUsuarios = e => {
    return (
      <form onSubmit={crear}>
        <h3>
          campos basicos de registros
       </h3>
        <p> puedes añadir campos personalizados que seran añadidos al perfil del usuario</p>
        <div className="browser-default">
          <div className="input-field">
            <input id="name" type="text" name="name" required maxLength="64" className="validate"></input>
            <label htmlFor="name">PRIMER NOMBRE</label>
            <span className="helper-text" data-error="error" data-success="correcto"></span>
          </div>
        </div>
        <div>
          <div className="input-field">
            <input type="email" name="email" required maxLength="64" className="validate" ></input>
            <label htmlFor="email">CORREO ELECTRONICO</label>
            <span className="helper-text" data-error="error req : @example.com" data-success="correcto">@example.com</span>
          </div>
        </div>
        <div>
          <div className="input-field">
            <input type="password" name="pass" required minLength="4" maxLength="16" className="validate"></input>
            <label htmlFor="pass">CONTRASEÑA</label>
            <span className="helper-text" data-error="error 4-16 alfanumeric" data-success="correcto">4-16 alfanumeric</span>
          </div>
        </div>
        {component.length >= 1 ? component.map((com, index) => {
          return (
            <div key={index}>
              <div className="row">
                <div className="col s10">
                  {com}
                </div>
                <Link onClick={(e) => { e.preventDefault(); eliminarInput(index); }} className="text-red">remover</Link>
              </div>
            </div>
          );
        }) : null} <Button block type="submit">crear usuario</Button>
      </form>

    );
  };

  const FormularioParaLaCreacionInputs = e => {
    return (
      <div>
        <h3>creacion de etiquetas</h3>
        <p>aqui puedes crear un campo que sera asignado al usuario Ejemplo : direccion, edad, alguna nota etc etc</p>
        <form onSubmit={crearInput}>
          <label>ROTULO</label>
          <input type="text" placeholder="rotulo" name="rotulo" minLength="3" maxLength="18" required></input>
          <div className="fixed-action-btn">
            {mostrar ?
              <button type="submit" className="btn-floating btn-large green pulse" style={{ marginBottom: 140, marginRight: 20 }}><i className="material-icons">add</i></button>
              :
              null}
          </div>
        </form>
      </div>
    );
  };

  const AlertaCustom = e => {
    return (
      <div style={{ marginTop: 10 }} classNameName={msgCss + " alert fade m-b-15 p-t-10 p-b-10"} id="msg_alert">
        <strong id="msg_title">{msgTitle}</strong>
        <span id="msg_text">{msgText}</span>
      </div>
    );
  };


  return (
    <div className="container">

      <div>
        {mostrar ? null : (
          <div>
            {response ? <AlertaCustom /> : null}
            <FormularioDeRegistroUsuarios></FormularioDeRegistroUsuarios>
          </div>)}
      </div>

      {mostrar ? <FormularioParaLaCreacionInputs></FormularioParaLaCreacionInputs> : null}

      <pre>{JSON.stringify(contexto.users, null, 1)}</pre>

      <div className="fixed-action-btn">
        {mostrar ?
          <p className="btn-floating btn-large red pulse" style={{ marginBottom: 70, marginRight: 20 }} onClick={() => setmostrar(false)}><i className="material-icons">keyboard_return</i>volver</p>
          :
          <p className="btn-floating btn-large cyan pulse" style={{ marginBottom: 70, marginRight: 20 }} onClick={() => setmostrar(true)}><i className="material-icons">add</i>crear</p>}
      </div>
    </div>
  );
};
