import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { ContextUser } from '../Contexto';
import M from "materialize-css";

export const ProfileUsuario = () => {
  const contexto = useContext(ContextUser);
  const { userId } = useParams();
  const options = { headers: { 'x-access-token': contexto.token } };
  const [fetch, setfetch] = useState(false);
  const [user, setuser] = useState({});
  const [role] = useState();
  const [rols, setrols] = useState([]);
  const [response, setresponse] = useState("");
  const [search] = useState("");
  const [filteredUsers, setfilteredUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    // Init Tabs Materialize JS
    let modal = document.querySelectorAll(".modal");
    M.Modal.init(modal);
  });

  useEffect(() => {
    setfilteredUsers(
      rols.filter((user) => user.includes(search)
      )
    );
    console.log(filteredUsers)
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
          console.log(error.response.data);
        });
    }
    fetchdata();
    return setfetch(false);
  }, [fetch]);


  const updateRole = (e) => {
    axios.patch("api/user/" + userId, { "role": e }, options)
      .then(response => {
        contexto.setfetch(true);
        setfetch(true);
        setresponse("");
      })
      .catch(error => {
        setresponse(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  const eliminarRol = (rol) => {
    if (rol === "admin")
      return;
    axios.patch("api/user/remove/" + userId, { "role": rol }, options)
      .then(response => {
        setresponse("");
        contexto.setfetch(true);
        setfetch(true);
      })
      .catch(error => {
        setresponse(error.response.data.message);
        // console.log(error.response.data.message)
      });
  };

  const pushUser = (id) => {
    axios.patch("api/user/adduser/" + userId, { "id": id }, options)
      .then(response => {
        contexto.setfetch(true);
        console.log("usuario actualizado : ", response.data);
        setfetch(true);
      })
      .catch(error => {
        // console.log(error.response.data.message)
        setresponse(error.response.data.message);
      });
  };

  const eliminarUser = (id) => {
    console.log(id);
    axios.delete("api/user/" + id, options)
      .then(response => {

        contexto.setfetch(true);
        history.push("/");
        setresponse("");
      })
      .catch(error => {
        setresponse(error.response.data);
        console.log(error);
      });
  };

  return (
    <div style={{ display: "flex", width: 100 + "%", height: 150 + "vh", flexWrap: "wrap" }}>

      <div style={{ flex: 1, textAlign: "center" }}>
        <div>
          <Row>
            <Col>
              <img alt="alt prop" onClick={() => console.log("foto")} src={"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} roundedcircle="true" />
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col>
              <h2>  {user.name}</h2>
            </Col>
          </Row>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Email:</th>
              <th>{user.email}</th>
            </tr>
          </thead>
        </Table>
      </div>

      <div style={{ flex: 1, backgroundColor: "pink" }}>
        de roles:       {response}
        <div style={{ backgroundColor: "crimson" }}>
          <div>
            <h3>
              {rols.map((roles, i) => <div key={i}>
                <div className="chip">
                  {roles}
                  <i className="close material-icons" onClick={() => {
                    if (roles === "admin") {
                      setresponse("no puedes eliminar el admin");
                      // console.log("no puedes eliminar el admin")
                    } else {
                      setresponse("");
                      eliminarRol(roles);
                    }
                  }}>close</i>
                </div>
              </div>
              )}
            </h3>
          </div>
        </div>
        <div>

          <Form.Group onChange={e => updateRole(e.target.value)} value={role} style={{ width: "50%", margin: 3 }}>
            <Form.Control as="select" custom>
              <option disabled="disabled">--añadir roles/pulsar x roja para eliminar--</option>
              {contexto.rols.map((role, index) => {
                return <option key={index}>{role.name}</option>;
              }
              )}
            </Form.Control>
          </Form.Group>

        </div>

        <div style={{ backgroundColor: "green", marginBottom: 10 }}>
          <div>
            <button className="waves-effect waves-light btn" onClick={() => contexto.setopen(!contexto.open)}>doble tap para desplegar la lista de relaciones</button>
          </div>
          <div>
            <button className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal seleccionar usuario a relacionar</button>
          </div>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <Form.Group onChange={e => pushUser(e.target.value)}>
                <Form.Label>selecciona un usuario para vincular a este usuario</Form.Label>
                <Form.Control as="select" custom>
                  {contexto.users.map((user, index) => {
                    return <option key={user._id} value={user._id}>{user.name}</option>;
                  }
                  )}
                </Form.Control>
              </Form.Group>
            </div>
            <button className="waves-effect btn-red modal-trigger modal-close">cerrar modal</button>
          </div>

        </div>


        {/* 
        <div style={{ backgroundColor: "yellow" }}>
          <h4>empresas: {JSON.stringify(user.companys)}</h4>
          <h4>empresas: {JSON.stringify(user, ["companys"])}</h4>
        </div> */}

        <button onClick={() => eliminarUser(userId)} className="btn-red">
          eliminar el usuario actual
        </button>
      </div>

    </div>
  );

};
