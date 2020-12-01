import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { ContextUser } from '../Contexto';

export const Lista = () => {
  const contexto = useContext(ContextUser);
  // const [email, setEma] = useState("email");
  // const [_id, setID] = useState("_id");
  const [search, setSearch] = useState("");
  const [filteredUsers, setfilteredUsers] = useState([]);

  useEffect(() => {
    setfilteredUsers(
      contexto.users.filter((user) => user.email.includes(search))
    );
  }, [search]);

  // const checkEmail = e => { e ? setEma("") : setEma("email"); };
  // const checkId = e => { e ? setID("") : setID("_id"); };

  const TablaDeUsuarios = () => {
    return (
      filteredUsers.map((user, index) =>
        <tbody key={user._id}>
          <tr>
            <td>{index}</td>
            <td><Link to={"/usuario/lista/" + user._id}>{user.email}</Link></td>
            <td>{user.name}</td>
            <td>{user._id}</td>
          </tr>
        </tbody>

      )
    );
  };

  return (
    <div style={{ margin: 10 }}>
      <div>
        <Form.Group>
          <Form.Label>buscar por email</Form.Label>
          <Form.Control type="search" placeholder="buscar..." onChange={(e) => setSearch(e.target.value)} width="50%" style={{ width: '40%' }} />
        </Form.Group>
        {/* <input type="checkbox" onChange={(e) => checkEmail(e.target.checked)} /><span>email</span>
        <input type="checkbox" onChange={(e) => checkId(e.target.checked)} /><span>_id</span> */}
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
        <TablaDeUsuarios></TablaDeUsuarios>
      </Table>

      <pre><h1>USUARIOS</h1>{JSON.stringify(filteredUsers, ["_id", "email"], 1)}</pre>
    </div>
  );
};
