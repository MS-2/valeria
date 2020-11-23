import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
axios.defaults.baseURL =  'https://valeria-server.herokuapp.com/';
// axios.defaults.baseURL =  'http://localhost:4000/';
export const ContextUser = createContext();

const Provider = (props) => {

    // const [locastorageToken, setlocastorageToken] = useState(localStorage.getItem("token"));

      /** => condicion para TODAS las llamadas a fetch asyncronas @type {bool} */ /**/
    const [fetch, setfetch] = useState(false);

      /** => validacion de autenticacionn @type {bool} */ /**/
    const [isAuth, setisAuth] = useState(false);

      /** => token de usuario activo @type {string} */ /**/
    const [token, settoken] = useState("");
    
      /** => manejador de errores de inicio de sesion @type {string} */ /**/
    const [err, seterr] = useState("");

      /** => EL de USUARIO ACTIVO en el sistema @type {array} */ /**/
    const [user, setuser] = useState({});

      /** => LOS usuarios en el sistema @type {array} */ /**/
    const [users, setusers] = useState([]);

      /** => lista de compañias en el sistema @type {array} */ /**/
    const [companys, setcompanys] = useState([]);

      /** => id del usuario activo en sesion @type {string} */ /**/
    const [id, setid] = useState("");

      /** => control para login del usuario activo en sesion @type {bool} */ /**/
    const [time, settime] = useState(true);

      /** => lista de roles de usuarios @type {array} */ /**/
    const [rols, setrols] = useState([]);

     /** => control de abierto/cerrado para el panel lateral derecho @type {bool} */ /**/
    const [open, setopen] = useState();

    //GET THE ACTUAL USER ID / se activa al iniciar sesion comprueba y retorna el id del usuario activo
    if (isAuth && time) {     
        axios.get("api/user/"+id)     
        .then(response => {
        setuser(response.data)
        settime(false)
        })
        .catch(error => {
        console.log(error)
        })
    }
// cuando se registra, modifica o elimina una compañia esta funcion refresca la data mostrada en pantalla 
    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/company");
          setcompanys(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

// Localstorage
    useEffect(() => {

      let tok = localStorage.getItem("token")

        if (tok) {
          setisAuth(true);
          settoken(tok);
          let id = decode(tok);
          setid(id.id);
          console.log("true")
        }else{
          console.log("false")
        }
      

    }, []);

// cuando se registra, modifica o elimina un usuario esta funcion refresca la data mostrada en pantalla 
    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/user");
          setusers(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

// cuando se registra, modifica o elimina un role de un usuario esta funcion refresca la data mostrada en pantalla 
    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/role");
          setrols(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

      //funcion para hacer logout, aun le falta colocar validaciones
    const logout = () => {
        setisAuth(false);
        settoken("");
        setuser({});
        setid("");
        localStorage.removeItem("token");
        console.log(process.env.PUBLIC_URL)
        window.location.href  = "/valeria";
    }

//funcion para limpiar el registro de errores
    const cleanERROR = () => {
       seterr('')
    }

    return (
      // si comienza con set es una funcion , las demas son variables GLOBALES
        <ContextUser.Provider value={{
            open,
            setopen,
            user,
            setuser,
            id,
            setid,
            err,
            seterr,
            token,
            settoken,
            isAuth,
            setisAuth,
            cleanERROR,
            logout,
            users,
            setusers,
            setcompanys,
            setfetch,
            fetch,
            companys,
            rols
        }}>
            {props.children}
        </ContextUser.Provider>
    )
}

// export default withRouter(UserContextProvider);
export default Provider;