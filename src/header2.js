import React, { useContext, useState,useEffect } from 'react';
import { ContextUser } from './Contexto';
import { withRouter,Link  } from "react-router-dom";
import './chips.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css";

const Header2 = (props) => {
    
	const contexto = useContext(ContextUser);
    const { history, location } = props;
    
    useEffect(() => {
        // Init Tabs Materialize JS
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);
    });

	return (

        <div>

<div class="navbar-fixed">
<nav >
    <div class="nav-wrapper blue indigo cyan">
    <Link data-target="mobile-demo" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></Link>
        <ul class="right hide-on-med-and-down">
        <li><Link to="/"><i class="material-icons left">home</i></Link></li>
        <li><Link><i class="material-icons right">settings</i></Link></li>
        </ul>
    </div>
</nav>


</div>


  <ul class="sidenav" id="mobile-demo">
     
    
    <li>
 
        <div class="user-view cyan">
        <Link  class="sidenav-close"><i class="Small material-icons white-text">arrow_back</i></Link>
    
            <li><a>Nombre : {contexto.user.name}</a></li>
            <li><a>Email : {contexto.user.email}</a></li>
        </div>
    </li>
    <li><div class="divider"></div></li>
    <li><Link to="/" class="logo-container sidenav-close">Home Valeria<i class="material-icons left">cloud</i></Link></li>
    <li><Link class="sidenav-close" to="/empresa/crear">registrar empresa<i class="material-icons left">work</i></Link></li>
    <li><Link class="sidenav-close" to="/usuario/crear">registrar persona<i class="material-icons left">person</i></Link></li>
    <li><Link class="sidenav-close" to="/usuario/lista">lista de usuarios<i class="material-icons left">list</i></Link></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" onClick={()=> contexto.logout()}>cerrar sesion</a></li>
  </ul>

</div>

	);
}
export default withRouter(Header2);
