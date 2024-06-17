import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

export const PersonTable = () => {
  // Initialisation du tableau de chauffeurs
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Alice', chatOption: false },
    { id: 2, name: 'Bob', chatOption: false },
    { id: 3, name: 'Charlie', chatOption: false },
  ]);

  // Fonction pour activer/désactiver l'option de chat
  const toggleChatOption = (id) => {
    setDrivers(
      drivers.map((driver) =>
        driver.id === id ? { ...driver, chatOption: !driver.chatOption } : driver
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Covoiturez
      </Typography>
      <Grid container spacing={3}>
        {drivers.map((driver) => (
          <Grid item xs={12} sm={6} md={4} key={driver.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {driver.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Omnisport, Poste Centrale, Melen
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'space-between' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => console.log(`Demande envoyée à ${driver.name}`)}
                >
                  Demande
                </Button>
                <IconButton 
                  color={driver.chatOption ? "primary" : "default"} 
                  onClick={() => toggleChatOption(driver.id)}
                >
                  <ChatIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
