import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { ContextUser } from './Contexto';
import Header from './header';
import Login from './Login';
import { Usuario } from './componentes/Usuario';
import { CreateRoles } from './componentes/CreateRoles';
// import { Line as LineChart } from 'react-chartjs';
import { Empresa } from './componentes/Empresa';
import { Lista } from './componentes/TablaUsuarios';

import { ProfileUsuario } from './componentes/ProfileUsuario';
import { SideNavRight } from './componentes/SideNavRight';

function App() {

  const [boo] = useState(false);
  const user = useContext(ContextUser);


  if (!user.isAuth)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>

      </Router>
    )

  else if (user.isAuth && !boo)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header></Header>
        {user.open ? <SideNavRight context={user.users}></SideNavRight> : null}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/empresa/crear" component={Empresa} />
          <Route exact path="/usuario/crear" component={Usuario} />
          <Route exact path="/usuario/lista" component={Lista} />
          <Route exact path="/usuario/roles" component={CreateRoles} />
          <Route exact path="/usuario/lista/:userId" component={ProfileUsuario} />
          <Route exact path="/empresa/:id" component={ProfileEmpresa} />
          <Route component={() => <div>no found</div>} />
        </Switch>
      </Router>
    )

  else if (user.isAuth && boo)
    return (
      <div>company</div>
    )

  else
    return (
      <div>NotFoundfound</div>
    )
}

const Main = () => {
  const contexto = useContext(ContextUser);
  const empresas = contexto.companys;
  const usuarios = contexto.users;
  const roles = contexto.rols;
  // const { history } = props;
  // const [component, setcomponent] = useState([]);

  const listaEmpresas = empresas.map((empresa) =>
    <div className="row" key={empresa._id}>
      <div className="col s12 m6">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">Nombre Empresa</span>
            <p>{empresa.empresa.name}</p>
          </div>
          <div className="card-action">
            <Link to={"/empresa/" + empresa._id}>Visitarla</Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>

      <pre><h1>EMPRESAS</h1>{JSON.stringify(empresas, ["_id", "name", "empresa", "nit"], 2)}</pre>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <span className="card-title">Cantidad de empresas registradas</span>
              <p>{empresas.length}</p>
            </div>
            <div className="card-action">
              {/* <a href="#">This is a link</a>
              <a href="#">This is a link</a> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {listaEmpresas}
        </div>
      </div>
      <pre><h1>USUARIOS</h1>{JSON.stringify(usuarios, ["_id", "email"], 1)}</pre>
      <pre><h1>ROLES</h1>{JSON.stringify(roles, null, 1)}</pre>
    </div>
  )
}






const ProfileEmpresa = () => {
  // const contexto = useContext(ContextUser);
  // const { id } = useParams();
  // const options = { headers: { 'x-access-token': contexto.token } };
  return (
    <h1>aqui irian las graficas, datos estadisticas de x empresa</h1>
  );
}


export default App;








// const SidenavRight = () => {
//   const contexto = useContext(ContextUser);


//   useEffect(() => {
//     let sid = document.querySelectorAll(".sidenav");
//     M.Sidenav.init(sid, { edge: "right" });
//   });

//   return (
//     <>
//       <ul id="slide-out" className="sidenav">
//         <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
//         <li><a href="#!">Second Link</a></li>
//         <li><a className="subheader">Subheader</a></li>
//         <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
//       </ul>
//     </>
//   );
// }