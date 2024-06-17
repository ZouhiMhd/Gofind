import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const SideBarHouse = () => {
  const locateur = false;
  const isSmallScreen = useMediaQuery('(max-width: 950px)');
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          top: '80px',
          width: drawerWidth,
          backgroundColor: 'transparent', // Fond transparent
          color: '#000000', // Texte noir
        },
      }}
      anchor="left"
    >
      <List>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Menu Principal" />}
          </ListItem>
        </Link>
        <Link to="/homehouse" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><HouseIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Menu Colocation" />}
          </ListItem>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><ListAltIcon/></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Tous les Habitats" />}
          </ListItem>
        </Link>
        {locateur ? (
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Profil locateur" />}
            </ListItem>
          </Link>
        ) : (
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Profil locataire" />}
            </ListItem>
          </Link>
        )}
        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Chercher un logement" />}
          </ListItem>
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><AddHomeIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Louer un Logement" />}
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideBarHouse;
