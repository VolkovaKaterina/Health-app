import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import EventIcon from '@mui/icons-material/Event';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  Container,
  List, ListItemButton, ListItemIcon,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(() => createStyles({
  page: {
    background: '#e3f8ff',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,

  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    display: 'block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    fontSize: 24,
    color: '#1352ab',
  },
}));

const theme = createTheme();

const Layout = () => {
  const { pathname } = useLocation();

  const classes = useStyles();
  const menuItems = [
    {
      text: 'Appointment',
      icon: <AccessTimeSharpIcon color="primary" />,
      path: '/',
    },
    {
      text: 'Events',
      icon: <EventIcon color="primary" />,
      path: '/events',
    },
    {
      text: 'Doctors',
      icon: <LocalHospitalIcon color="primary" />,
      path: '/doctors',
    },
    {
      text: 'Clients',
      icon: <AccountBoxIcon color="primary" />,
      path: '/clients',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container>
          <nav>
            <List className={classes.list}>
              {menuItems.map((item) => (
                <ListItemButton
                  selected={pathname === item.path}
                  key={item.text}
                  className={classes.active}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link className={classes.link} to={item.path}>
                    {item.text}
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </nav>
        </Container>
        <div className={classes.page}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
