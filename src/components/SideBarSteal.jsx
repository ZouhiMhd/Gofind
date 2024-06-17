import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ReportIcon from '@mui/icons-material/Report';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const SideBarSteal = () => {
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
        <Link to="/homesteal" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><ReportIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Menu Objet Volé" />}
          </ListItem>
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><ListAltIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Tous les Objets Volés" />}
          </ListItem>
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Profil Sinistré" />}
          </ListItem>
        </Link>
        <Link to="/passenger" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Chercher un appareil particulier" />}
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideBarSteal;
