import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

export const PersonTable = () => {
  // Initialisation du tableau de personnes
  const [persons, setPersons] = useState([
    { id: 1, name: 'Alice', chatOption: false },
    { id: 2, name: 'Bob', chatOption: false },
    { id: 3, name: 'Charlie', chatOption: false },
  ]);

  // Fonction pour activer/désactiver l'option de chat
  const toggleChatOption = (id) => {
    setPersons(
      persons.map((person) =>
        person.id === id ? { ...person, chatOption: !person.chatOption } : person
      )
    );
  };

  return (
    <div style={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Covoiturez
      </Typography>
      <Grid container spacing={3}>
        {persons.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Omnisport, Poste Centrale, Melen
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'space-between' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => console.log(`Accepted ${person.name}`)}
                >
                  Accepter
                </Button>
                <IconButton 
                  color={person.chatOption ? "primary" : "default"} 
                  onClick={() => toggleChatOption(person.id)}
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
