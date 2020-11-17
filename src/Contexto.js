import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// axios.defaults.baseURL =  'https://valeria-server.herokuapp.com/';
axios.defaults.baseURL =  'http://localhost:4000/';
export const ContextUser = createContext();

const Provider = (props) => {
  /** => condicion para TODAS las llamadas a fetch asyncronas @type {bool} */ /**/
    const [fetch, setfetch] = useState(false);
    const [isAuth, setisAuth] = useState(false);
    const [token, settoken] = useState("");
    const [err, seterr] = useState("");
    const [user, setuser] = useState({});
    const [users, setusers] = useState([]);
    const [companys, setcompanys] = useState([]);
    const [id, setid] = useState("");
    const [time, settime] = useState(true);
    const [rols, setrols] = useState([]);

    //GET THE ACTUAL USER ID 
    if (isAuth && time) {     
        axios.get("api/user/"+id)     
        .then(response => {
        // console.log("response !! : ", response.data)
        setuser(response.data)
        settime(false)
        })
        .catch(error => {
        console.log("responseERROR")
        console.log(error)
        })
    }

    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/company");
        //   console.log("datos request",request.data)
          setcompanys(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/user");
        //   console.log("datos request",request.data)
          setusers(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

    useEffect(() => {
        async function fetchdata(){
          const request = await axios.get("api/role");
          console.log("datos rols request",request.data)
          setrols(request.data)
          return request
        }
        fetchdata();
        return setfetch(false);
      }, [fetch]);

    const logout = () => {
        setisAuth(false);
        settoken("");
        setuser({});
        setid("");
    }

    const cleanERROR = () => {
       seterr('')
    }

    return (
        <ContextUser.Provider value={{
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