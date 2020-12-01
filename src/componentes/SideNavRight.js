import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ContextUser } from '../Contexto';
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';
import '@rmwc/drawer/styles';

export const SideNavRight = () => {
  const contexto = useContext(ContextUser);
  let history = useHistory();
  const userIdfromLocation = history.location.pathname.slice(15);
  const [open, setOpen] = useState(true);
  const [relatives, setrelatives] = useState([]);
  const [isloaded, setisloaded] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      await axios.get("api/user/" + userIdfromLocation)
        .then(response => {
          let users = response.data.users;
          console.log(users);
          setrelatives(users);
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchdata();
    return setisloaded(true);
  }, [isloaded]);

  const refetch = (user) => {
    contexto.setfetch(true);
    history.push("/usuario/lista/" + user._id);
    contexto.setopen(false);
  };

  function usuarios() {
    return relatives.map((user, index) => {
      return (
        <ListItem key={index} onClick={() => refetch(user)}>
          {user.name}
        </ListItem>
      );
    });
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
};
