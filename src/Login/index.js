import React, { useState, useContext } from 'react';
import axios from "axios";
import { ContextUser } from '../Contexto';
import decode from 'jwt-decode';
import urlImage from '../logo512.png';
import './Login.css';

const Login = () => {
  const contexto = useContext(ContextUser);
  const [msgTitle, setMsgTitle] = useState("");
  const [msgText, setMsgText] = useState("");
  const [msgCss, setMsgCss] = useState("");

  const start = e => {
	e.preventDefault();
	  
	setMsgTitle("Aguarde!");
	setMsgText("Autenticando...");
	setMsgCss("alert-info show");
    let formData = new FormData(e.target);
    let user = {};
    for (let input of formData.entries()) { 
		user[input[0]] = input[1]; 
	}

    axios.post("api/auth/signin", user)
      .then(response => {
        console.log(contexto)
        contexto.setisAuth(true);
        contexto.settoken(response.data.token);
        let id = decode(response.data.token);
		contexto.setid(id.id);
		localStorage.setItem("token", response.data.token )
      })
      .catch(error => {
        // setlogError(error.response.data.msg);
		// console.log(error.response.data.msg);
		setMsgTitle("Atención! ");
		setMsgText(error.response.data.msg);
		setMsgCss("alert-warning show");
	
      }); 
  };
  return (
		<div className={'content content-full-width content-inverse-mode'}>
   			<div className="login login-with-news-feed">
				<div className="news-feed">
					<div className="news-image" style={{backgroundImage: `url(${urlImage})`}}></div>
					<div className="news-caption">
						<h4 className="caption-title"><b>Quattro</b> Admin App</h4>
						<p>
							Sistema Integral de Gestión
						</p>
					</div>
				</div>
				<div className="right-content">
					<div className="login-header">
						<div className="brand">
							<span className="logo"></span> <b>Quattro</b> S.A.
							<small>Sistema Integral de Gestión</small>
						</div>
						<div className="icon">
							<i className="fa fa-sign-in"></i>
						</div>
					</div>
					<div className="login-content">
						<form className="margin-bottom-0" onSubmit={start}>

							<div className={msgCss + " alert fade m-b-15 p-t-10 p-b-10"}  id="msg_alert">
  								<strong id="msg_title" >{msgTitle}</strong>
								<span id="msg_text">{msgText}</span>
							</div>
						
							<div className="form-group m-b-15">
								<input  type="email" name="email" className="browser-default form-control form-control-lg" placeholder="Email Address" required autoComplete="username" defaultValue="admin@localhost" />
							</div>
							<div className="form-group m-b-15">
								<input type="password" name="pass" className="browser-default form-control form-control-lg" placeholder="Password" required autoComplete="current-password" defaultValue="admin"/>
							</div>
							<div className="checkbox checkbox-css m-b-30">
								<input type="checkbox" id="remember_me_checkbox" value="" />
								<label htmlFor="remember_me_checkbox">
									Remember Me
								</label>
							</div>
							<div className="login-buttons">
								<button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
							</div>
							<div className="m-t-20 m-b-40 p-b-40 text-inverse">
								{/* Not a member yet? Click <Link to="/user/register-v3" className="text-success">here</Link> to register. */}
							</div>
							<hr />
							<p className="text-center text-grey-darker">
								&copy; Quattro S.A. todos los derechos reservados 2020
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
    // <form onSubmit={start}>
    //   <input type="email" name="email" defaultValue="admin@localhost" />
    //   <input type="password" name="pass" autoComplete="true" defaultValue="admin" />
    //   <button>Log In</button>
    //   {logError}
    //   <div>hola.</div>
    // </form>
  );
};

export default Login