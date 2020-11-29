import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect, useParams, Link, useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Col, Row, Image, Badge, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ContextUser } from './Contexto';
// import Header from './header';
import Header from './header2';
import '@rmwc/chip/styles';
import '@rmwc/tooltip/styles';
import Login from './Login';
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from '@rmwc/drawer';
import { List, ListItem, ListItemGraphic } from '@rmwc/list';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import faker from 'faker'
function App() {

  const [boo, setboo] = useState(false);
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
        {user.open ? <Example context={user.users}></Example> : null}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/empresa/crear" component={Empresa} />
          <Route exact path="/usuario/crear" component={Usuario} />
          <Route exact path="/usuario/lista" component={Lista} />
          <Route path="/usuario/lista/:userId" children={<Child />} />
          <Route path="/empresa/:id" children={<Childz />} />
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

const Empresa = () => {
  const contexto = useContext(ContextUser);
  const options = { headers: { 'x-access-token': contexto.token } };
  const [response, setresponse] = useState();
  /** => funcion para crear empresa app @type {Object} */ /**/
  const crear = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const empresa = {} = formData.entries();

    for (let input of formData.entries()) {
      empresa[input[0]] = input[1]
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
      })
  }

  return (
    <div style={{ backgroundColor: "pink", borderRadius: 20, margin: 10 }}>


      <Form onSubmit={crear} style={{ margin: 40 }} >
        {response ? <div style={{ backgroundColor: "green", color: "white" }}>{response}</div> : null}
        <Form.Group controlId="name">
          <Form.Label>Nombre Comercial</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" defaultValue="origo" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="rsocial">
            <Form.Label>Razon social:</Form.Label>
            <Form.Control type="text" name="rsocial" placeholder="razon social" defaultValue="chocolates" />
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

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Elegir...</option>
              <option>...</option>
            </Form.Control>
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
}

const Usuario = () => {
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
    const user = {}
    for (let input of formData.entries()) {
      user[input[0]] = input[1]
    }

    let clavesValor = Object.entries(user);
    console.log(clavesValor);
    const res = clavesValor.filter(element =>element[0] !== "pass" && element[0] !== "email" && element[0] !== "name");
    console.log(res);
    let objectExtraInputs = Object.fromEntries(res);
    console.log(objectExtraInputs);

    user["info"] = objectExtraInputs;

    console.log(user);
 
    axios.post("api/user", user, options)
      .then(response => {
        contexto.setfetch(true)
        setMsgText(response.data.name + " creado con exito")
        setMsgTitle("usuario : ");
        setMsgCss("alert-success show");
        setresponse(".")
      })
      .catch(error => {
        setMsgTitle("Atención! ");
		    setMsgText(error.response.data.message);
        setMsgCss("alert-danger show");
        setresponse(".")
      })
  }

  const crearInput = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const put = {}
    for (let input of formData.entries()) {
      put[input[0]] = input[1]
    }
    console.log("put",put)
   
    const NuevoInput = () => {
     return (
       <>
        <Form.Label>{put.rotulo}</Form.Label>
        <Form.Control type="text" name={put.rotulo} required={put.check === "on" ? true : false} />
      </>
     )
    }
    console.log(component)
    setcomponent(oldArray=> [...oldArray,<NuevoInput></NuevoInput>])
    setmostrar(false)
  }

  const eliminarInput =  (e) => {
    setcomponent(component.filter((currentValue, index, arr)=> index !== e))
  }

  const FormularioDeRegistroUsuarios = e => {
  return (
   
      <form onSubmit={crear}>
       <h3>
        campos basicos de registros
       </h3>
       <p> puedes añadir campos personalizados que seran añadidos al perfil del usuario</p>
        <div class="browser-default">
            <div class="input-field">
              <input id="name" type="text" name="name" required maxlength="64" class="validate" value={faker.name.firstName()} ></input>
              <label for="name">PRIMER NOMBRE</label>
              <span class="helper-text" data-error="error" data-success="correcto"></span>
          </div>
        </div>
        <div>
            <div class="input-field">
              <input type="email"  name="email" required maxlength="64" class="validate" value={faker.internet.email()} ></input>
              <label for="email">CORREO ELECTRONICO</label>
              <span class="helper-text" data-error="error" data-success="correcto">@example.com</span>
          </div>
        </div>
        <div>
            <div class="input-field">
              <input type="password"  name="pass" required minLength="4" maxlength="16" class="validate" defaultValue="123456"></input>
              <label for="pass">CONTRASEÑA</label>
              <span class="helper-text" data-error="error" data-success="correcto">4-16 alfanumeric</span>
          </div>
        </div>
        {
        component.length >= 1 ? component.map((com,index)=>{
        return (
          <div key={index}>
            <div class="row">
              <div class="col s10">
                  {com}            
              </div>
              <Link onClick={ (e)=>  {e.preventDefault(); eliminarInput(index);}} class="text-red">remover</Link>       
            </div>
          </div>
          )
        }) : null
      } <Button block type="submit">crear usuario</Button>
      </form>

    );
  }

  const FormularioParaLaCreacionInputs = e => {
    return (
      <div>
        <h3>creacion de etiquetas</h3>
        <p>aqui puedes crear un campo que sera asignado al usuario Ejemplo : direccion, edad, alguna nota etc etc</p>
      <form onSubmit={crearInput}>
        <label>ROTULO</label>
        <input type="text" placeholder="rotulo" name="rotulo" minLength="3" maxLength="9" required></input>
        <div class="fixed-action-btn">
        {mostrar ? 
        <button type="submit" class="btn-floating btn-large green pulse" style={{marginBottom:140, marginRight:20}}><i class="material-icons">add</i></button>
         : 
        null
        }
        </div>
      </form>
      </div>
    )
  }

  const AlertaCustom = e => {
    return(
    <div style={{marginTop:10}} className={msgCss + " alert fade m-b-15 p-t-10 p-b-10"}  id="msg_alert">
      <strong id="msg_title" >{msgTitle}</strong>
      <span id="msg_text">{msgText}</span>
    </div>
    )
  }


  return (
    <div class="container">

        <div>
        {mostrar ?  null : (
          <div>
          {response ? <AlertaCustom /> : null}
          <FormularioDeRegistroUsuarios></FormularioDeRegistroUsuarios>
          </div>)}
        </div>

        {mostrar ? <FormularioParaLaCreacionInputs></FormularioParaLaCreacionInputs>: null}

        <pre>{JSON.stringify(contexto.users, null, 1)}</pre>

        <div class="fixed-action-btn">
        {mostrar ? 
        <a class="btn-floating btn-large red pulse" style={{marginBottom:70, marginRight:20}}  onClick={()=>setmostrar(false)}><i class="material-icons">keyboard_return</i>volver</a>
         : 
        <a class="btn-floating btn-large cyan pulse" style={{marginBottom:70, marginRight:20}} onClick={()=>setmostrar(true)}><i class="material-icons">add</i>crear</a>}
        </div>
    </div>
  )
}

const CreateRoles = () => {

  const contexto = useContext(ContextUser);
  const token = contexto.token;
  const options = { headers: { 'x-access-token': token } };
  const [response, setresponse] = useState('');


  const crearRol = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rol = {}
    for (let input of formData.entries()) {
      rol[input[0]] = input[1]
    }
    axios.post("api/role", rol, options)
      .then(response => {
        contexto.setfetch(true)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div style={{ flex: 1, backgroundColor: "greenyellow" }}>
    <Form onSubmit={crearRol}>
      <Form.Group controlId="name" style={{margin:40}}>
        <Form.Label>nombre del rol</Form.Label>
        <Form.Control type="text" name="name" />
        <Form.Text className="text-muted">
        Introduzca nombre descriptivo para el rol
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" name="description" />
      </Form.Group>
      <Button block variant="success" type="submit">
        Submit
      </Button>
    </Form>
    <pre>roles{JSON.stringify(contexto.rols, ["name", "description"], 1)}</pre>
  </div>
  )
}

const Main = (props) => {
  const contexto = useContext(ContextUser);
  const empresas = contexto.companys;
  const usuarios = contexto.users;
  const roles = contexto.rols;
  const { history } = props;
  const [component, setcomponent] = useState([]);

  const listaDiv = empresas.map((empresa) =>
    <button key={empresa._id} style={{ margin: 5, borderStyle: "solid", backgroundColor: "pink", width: 300, height: 150 }}>
      <div onClick={() => history.push('/empresa/' + empresa._id)}>
        <div>
          {empresa.empresa.name}
        </div>
        <div>
          id : {empresa._id}
        </div>
      </div>
    </button>
  );

  const elemento = <h1>asdas</h1>
  return (
    <div>
     
      <pre><h1>EMPRESAS</h1>{JSON.stringify(empresas, ["_id", "name", "empresa", "nit"], 2)}</pre>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {listaDiv}
        </div>
      </div>
      <div class="chip">
          Tagasdasdasdad
          <i class="close material-icons">close</i>
        </div>
      <pre><h1>USUARIOS</h1>{JSON.stringify(usuarios, ["_id", "email"], 1)}</pre>
      <pre><h1>ROLES</h1>{JSON.stringify(roles, null, 1)}</pre>
    </div>
  )
}

const Lista = () => {
  const contexto = useContext(ContextUser);
  const usuarios = contexto.users
  const [email, setEma] = useState("email");
  const [_id, setID] = useState("_id");
  const [search, setSearch] = useState("");
  const [filteredUsers, setfilteredUsers] = useState([]);
  useEffect(() => {
    setfilteredUsers(
      usuarios.filter((user) =>
        user.email.includes(search)
      )
    )
  }, [search]);

  const checkEmail = e => { e ? setEma("") : setEma("email") }
  const checkId = e => { e ? setID("") : setID("_id") }

  const Test = () => {
    return (
      filteredUsers.map((user, index) =>

        <tbody>
          <tr>
            <td>{index}</td>
            <td><Link to={"/usuario/lista/" + user._id}>{user.email}</Link></td>
            <td>{user.name}</td>
            <td>{user._id}</td>
          </tr>
        </tbody>

      )
    )
  }

  return (
    <div style={{margin:10}}>
      <div>
        <Form.Group>
          <Form.Label>buscar por email</Form.Label>
          <Form.Control type="search" placeholder="buscar..." onChange={(e) => setSearch(e.target.value)} width="50%"style={{width:'40%'}} />
        </Form.Group>
        <input type="checkbox" onChange={(e) => checkEmail(e.target.checked)} /><span>email</span>
        <input type="checkbox" onChange={(e) => checkId(e.target.checked)} /><span>_id</span>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>nombre</th>
            <th>agun otro dato</th>
          </tr>
        </thead>
        <Test></Test>
      </Table>

      <pre><h1>USUARIOS</h1>{JSON.stringify(filteredUsers, [_id, email], 1)}</pre>
    </div>
  )
}


function Child(props) {
  const contexto = useContext(ContextUser);
  const { userId } = useParams();
  const options = { headers: { 'x-access-token': contexto.token } };
  const [fetch, setfetch] = useState(false);
  const [user, setuser] = useState({});
  const [role, setrole] = useState();
  const [rols, setrols] = useState([]);
  const [response, setresponse] = useState("");
  // const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const [isPhone, setisPhone] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
  const [filteredUsers, setfilteredUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    setfilteredUsers(
      rols.filter((user) =>
        user.includes(search)
      )                 
    )
  }, [search]);

  useEffect(() => {
 console.log(response);

  }, [response]);

  useEffect(() => {
    async function fetchdata() {
      axios.get("api/user/" + userId)
        .then(response => {
          let user = response.data;
          setuser(user);
          setrols(user.role);
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
    fetchdata();
    return setfetch(false);
  }, [fetch]);

  useEffect(() => {
    // console.log(isPhone)
  }, [isPhone]);

  const updateRole = (e) => {
    axios.patch("api/user/" + userId, { "role": e }, options)
      .then(response => {
        contexto.setfetch(true);
        setfetch(true);
        setresponse("")
      })
      .catch(error => {
        setresponse(error.response.data.message)
        console.log(error.response.data.message)
      })
  }

  const eliminarRol = (rol) => {
    if (rol === "admin") return
    axios.patch("api/user/remove/" + userId, { "role": rol }, options)
      .then(response => {
        setresponse("")
        contexto.setfetch(true);
        setfetch(true);
      })
      .catch(error => {
        setresponse(error.response.data.message)
        // console.log(error.response.data.message)
      })
  }

  const pushUser = (id) => {
    axios.patch("api/user/adduser/" + userId, { "id": id }, options)
      .then(response => {
        contexto.setfetch(true);
        console.log("usuario actualizado : ", response.data);
        setfetch(true);
      })
      .catch(error => {
        // console.log(error.response.data.message)
        setresponse(error.response.data.message)
      })
  }

  const eliminarUser = (id) => {
    console.log(id)
    axios.delete("api/user/" + id, options)
      .then(response => {

        contexto.setfetch(true);
        history.push("/");
        setresponse("")
      })
      .catch(error => {
        setresponse(error.response.data)
        console.log(error)
      })
  }



  // if (!isPhone) { 
  return (
    <div style={{ display: "flex", width: 100 + "%", height: 150 + "vh",  flexWrap: "wrap" }}>
      
      <div style={{ flex: 1, textAlign: "center" }}>
        <div >
          <Row>
            <Col >
              <Image onClick={() => console.log("foto")} src={"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} roundedCircle />
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col>
              <h2>  {user.name}</h2>
            </Col>
          </Row>
        </div>

        <Table  >
          <thead>
            <tr>
              <th>Email:</th>
              <th>{user.email}</th>
            </tr>
          </thead>
        </Table>
      </div>


      <div style={{ flex: 1, backgroundColor: "pink" }}>      {/* caja 2 */}
      lista de roles:       {response}            
        <div style={{ backgroundColor: "crimson", margin: 10, borderRadius:14 }}>
       
          <div>
            <h3>
              {rols.map(roles =>
                <Badge pill variant="warning">

                  {roles}-

                <spam style={{ color: "red" }} onClick={() => {
                    if (roles === "admin") {
                      setresponse("no puedes eliminar el admin")
                      // console.log("no puedes eliminar el admin")
                    } else {
                      setresponse("")
                      eliminarRol(roles)
                    }
                  }}>x</spam>
                </Badge>
              )}
            </h3>
          </div>


        </div>
        <div>
            <Form.Group onChange={e => updateRole(e.target.value)} value={role} style={{width:"50%" ,margin:3}}>
              <Form.Control as="select" custom>   
                <option disabled="disabled">--añadir roles/pulsar x roja para eliminar--</option>
                {
                  contexto.rols.map((role, index) => {
                    return <option>{role.name}</option>
                  }
                  )
                }
              </Form.Control>
            </Form.Group>
          </div>

        <div style={{ backgroundColor: "green", marginBottom: 10 }}>
          <Form.Group onChange={e => pushUser(e.target.value)}  >
            <Form.Label>selecciona un usuario para vincular a este usuario</Form.Label>
            <Form.Control as="select" custom>
              {
                contexto.users.map((user, index) => {
                  return <option value={user._id}>{user.name}</option>;
                }
                )
              }
            </Form.Control>
          </Form.Group>
          <Button onClick={() => contexto.setopen(!contexto.open)}>doble tap para desplegar la lista de relaciones</Button>
        </div>



        <div style={{ backgroundColor: "yellow" }}>
          <h4>empresas: {JSON.stringify(user.companys)}</h4>
          <h4>empresas: {JSON.stringify(user, ["companys"])}</h4>
        </div>
        <Button onClick={() => eliminarUser(userId)} variant="danger">
          eliminar el usuario actual
          </Button>
      </div>

    </div>
  );
  // } else {
  //   return (
  //     <div>otra cosa</div>
  //   );
  // }
}


function Example(props) {
  const contexto = useContext(ContextUser);
  let history = useHistory();
  const userIdfronLocation = history.location.pathname.slice(15);
  const [open, setOpen] = useState(true);
  const [relatives, setrelatives] = useState([]);
  const [isloaded, setisloaded] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      await axios.get("api/user/" + userIdfronLocation)
        .then(response => {
          let users = response.data.users;
          console.log(users)
          setrelatives(users)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchdata();
    return setisloaded(true);
  }, [isloaded]);

  const refetch = (user) => {
    contexto.setfetch(true);
    history.push("/usuario/lista/" + user._id)
    contexto.setopen(false);
  }

  function usuarios() {
    return relatives.map((user, index) => {
      return (
        <ListItem onClick={() => refetch(user)}>
          {user.name}
        </ListItem>
      )
    })
  }

  return (
    <>
      <Drawer dir="rtl" modal open={open} onClose={() => setOpen(false)}>
        <DrawerHeader dir="ltr">
          <DrawerTitle>relaciones</DrawerTitle>
        </DrawerHeader>
        <DrawerContent dir="ltr">
          <List>
            {isloaded ? usuarios() : "Loading..."}
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
}



function Childz() {
  const contexto = useContext(ContextUser);
  const { id } = useParams();
  console.log(id)
  const options = { headers: { 'x-access-token': contexto.token } };
  return (
    <div>otra cosa</div>
  );
}


export default App;
