// Import des dépendances nécessaires
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
  return(
    <>
    <Container maxWidth="md" style={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenue sur GoFind
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        La plateforme idéale pour trouver des objets, des trajets de covoiturage, et des locations de maisons
      </Typography>
      <Link to='/about'>
      <Button variant="contained" color="primary" size="large">
        En savoir plus
      </Button>
      </Link>
    </Container>
    <Container maxWidth="md" style={{ padding: '50px 0' }}>
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Link to='/homesteal' style={{textDecoration:'none', color:'black'}}>
            <Typography variant="h6" component="h2" gutterBottom>
              Identifier un objet volé
            </Typography>
            </Link>
            <Typography variant="body1" component="p">
              Recherchez si un objet n'a pas été déclaré volé avant de l'acheter.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Link to='/homecar' style={{textDecoration:'none', color:'black'}}>
            <Typography variant="h6" component="h2" gutterBottom>
              Covoiturage
            </Typography>
            </Link>
            <Typography variant="body1" component="p">
              Déclarez votre trajet ou trouvez des trajets de covoiturage pour voyager ensemble.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Link to='/homehouse' style={{textDecoration:'none', color:'black'}}>
            <Typography variant="h6" component="h2" gutterBottom>
              Colocation
            </Typography>
            </Link>
            <Typography variant="body1" component="p">
              Mettez en location votre maison ou des pièces libres pour être rémunéré.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
 
    <Container maxWidth="md" style={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Témoignages
      </Typography>
      <Typography variant="body1" component="p">
        "GoFind m'a permis de trouver une colocation idéale et de voyager facilement grâce au covoiturage."
      </Typography>
      <Typography variant="body1" component="p">
        "Grâce à GoFind, j'ai pu vérifier que mon achat n'était pas volé. Très rassurant !"
      </Typography>
    </Container>
  </>)
}


export default LandingPage
