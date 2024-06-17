import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const SideBarCar = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 950px)');
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          top: '80px',
          width: '22%',
          backgroundColor: 'transparent', // Fond transparent
          color: '#000000', // Texte noir
          borderRight: 'none', // Supprimer la bordure par défaut
        },
      }}
      anchor="left"
    >
      <List sx={{ padding: 0 }} style={{borderRight:'solid 2px grey'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button sx={{ paddingLeft: 2 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><MenuIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Menu Principal" />}
          </ListItem>
        </Link>
        <Link to="/homecar" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button sx={{ paddingLeft: 2 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><DirectionsCarIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Menu Covoiturage" />}
          </ListItem>
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button sx={{ paddingLeft: 2 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><HomeWorkIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Mes trajets" />}
          </ListItem>
        </Link>
        {location.pathname === '/driver' ? (
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button sx={{ paddingLeft: 2 }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><PersonIcon /></ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Profil conducteur" />}
            </ListItem>
          </Link>
        ) : (
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button sx={{ paddingLeft: 2 }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><PersonIcon /></ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Profil passager" />}
            </ListItem>
          </Link>
        )}
        <Link to="/passenger" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button sx={{ paddingLeft: 2 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><SearchIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Chercher un Véhicule" />}
          </ListItem>
        </Link>
        <Link to="/driver" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button sx={{ paddingLeft: 2 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><AddHomeIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Partager son Véhicule" />}
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideBarCar;
