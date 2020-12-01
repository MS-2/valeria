import React, { useContext, useEffect } from 'react';
import { ContextUser } from './Contexto';
import { withRouter, Link } from "react-router-dom";
import M from "materialize-css";
import './index.css';

const Header = (props) => {

    const contexto = useContext(ContextUser);
    const { location } = props;

    useEffect(() => {
        // Init Tabs Materialize JS
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);
    });

    return (

        <>

            <div className="navbar-fixed">
                <nav >
                    <div className="nav-wrapper blue indigo cyan">
                        {JSON.stringify(location.pathname)}
                        <Link to="/#" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></Link>
                        <ul className="right show-all">
                            <li><Link to="/"><i className="material-icons left">home</i></Link></li>
                            <li><Link to="/#"><i className="material-icons right">settings</i></Link></li>
                        </ul>
                    </div>
                </nav>


            </div>


            <ul className="sidenav" id="mobile-demo">


                <li>

                    <div className="user-view cyan">
                        <Link to="/#" className="sidenav-close"><i className="Small material-icons white-text">arrow_back</i></Link>
                        <ul>
                            <li style={{ cursor: "pointer" }}>Email : {contexto.user.email}</li>
                        </ul>
                    </div>
                </li>
                <li><div className="divider"></div></li>
                <li><Link className="sidenav-close" to="/empresa/crear">registrar empresa<i className="material-icons left">work</i></Link></li>
                <li><Link className="sidenav-close" to="/usuario/crear">registrar persona<i className="material-icons left">person</i></Link></li>
                <li><Link className="sidenav-close" to="/usuario/lista">lista de usuarios<i className="material-icons left">list</i></Link></li>
                <li><Link className="sidenav-close" to="/usuario/roles">crear roles<i className="material-icons left">face</i></Link></li>
                <li className="divider"></li>
                <li><Link to="/" onClick={() => contexto.logout()}>cerrar sesion</Link></li>
            </ul>

        </>

    );
}
export default withRouter(Header);
