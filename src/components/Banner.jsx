import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box} from '@mui/material';
import banner from "../../public/img/banner1.jpg"


export const Banner = () => {

  return (
    <div>
      <AppBar position="static">
      </AppBar>
      <div className="banner">
        <Container>
          <Box>
            <Typography variant="h3" gutterBottom>
              Bienvenue sur notre Plateforme de Covoiturage
            </Typography>
            <Typography variant="subtitle1">
              Trouvez facilement des trajets partagés avec d'autres utilisateurs !
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
};

