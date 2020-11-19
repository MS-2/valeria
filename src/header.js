import React, { useContext, useState } from 'react';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarNavigationIcon, TopAppBarTitle, TopAppBarActionItem, TopAppBarFixedAdjust, } from '@rmwc/top-app-bar';
import { Drawer, DrawerHeader, DrawerTitle, DrawerSubtitle, DrawerContent } from '@rmwc/drawer';
import { List, ListItem, ListItemGraphic } from '@rmwc/list'
import { withRouter  } from "react-router-dom";
import '@rmwc/top-app-bar/styles';
import '@rmwc/drawer/styles';
import '@rmwc/list/styles';
import '@rmwc/icon/styles';
import { ContextUser } from './Contexto';

const Header = (props) => {
	const [open, setOpen] = useState(false);
	const contexto = useContext(ContextUser);
	const logut = contexto.logout;
	const { history, location } = props;
	return (
		<>
			<TopAppBar fixed>
				<TopAppBarRow>
					<TopAppBarSection >
						<TopAppBarNavigationIcon icon="menu" onClick={() => setOpen(!open)} />
						<TopAppBarTitle>Home Valeria+{JSON.stringify(location.pathname)}</TopAppBarTitle>
					</TopAppBarSection>
					<TopAppBarSection alignEnd>
						<TopAppBarActionItem onClick={() => history.push('/')} icon="home" />
						<TopAppBarActionItem icon="settings" />
					</TopAppBarSection>
				</TopAppBarRow>
			</TopAppBar>
			<TopAppBarFixedAdjust />
			<Drawer modal open={open} onClose={() => setOpen(false)}>
				<DrawerHeader>
					<DrawerTitle>Bienvenido : {contexto.user.name}</DrawerTitle>
					<DrawerSubtitle>correo : {contexto.user.email} </DrawerSubtitle>
					<DrawerSubtitle>permisos : {contexto.user.role[0]} </DrawerSubtitle>
				</DrawerHeader>
				<DrawerContent>
					<List>
						<ListItem onClick={() => history.push('/empresa/crear')}>registrar empresa</ListItem>
						<ListItem onClick={() => history.push('/usuario/crear')}><ListItemGraphic icon="person" />registrar usuario</ListItem>
						<ListItem onClick={() => history.push('/usuario/lista')}><ListItemGraphic icon="list" />lista de usuarios</ListItem>
						<ListItem onClick={() => logut()}>cerrar sesion</ListItem>
					</List>
				</DrawerContent>
			</Drawer>
		</>
	);
}
export default withRouter(Header);
