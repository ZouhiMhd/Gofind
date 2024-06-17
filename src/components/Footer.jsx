import React from 'react';
import { Typography, Container, Grid, IconButton } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

const footerStyle = {
  backgroundColor: 'var(--blue)',
  color: '#fff',
  padding: '2rem 0',
  top:'0px'
};

const textStyle = {
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
};

export const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={textStyle}>
              Pourquoi choisir le covoiturage ?
            </Typography>
            <Typography variant="body1">
              Le covoiturage permet de réduire les émissions de CO2, de faire des économies et de rencontrer de nouvelles personnes !
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={textStyle}>
              Contactez-nous
            </Typography>
            <div style={contactItemStyle}>
              <Email />
              <Typography variant="body2" style={{ marginLeft: 8 }}>contact@example.com</Typography>
            </div>
            <div style={contactItemStyle}>
              <Phone />
              <Typography variant="body2" style={{ marginLeft: 8 }}>+33 123 456 789</Typography>
            </div>
            <div>
              <IconButton href="https://www.facebook.com">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com">
                <Instagram />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
