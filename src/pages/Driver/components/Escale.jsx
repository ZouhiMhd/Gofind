import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Escale = ({ onAdd }) => {
  const [escaleName, setEscaleName] = useState('');
  const [escales, setEscales] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleAddEscale = () => {
    setShowPrompt(true);
  };

  const handleConfirm = () => {
    if (escaleName.trim() !== '') {
      setEscales([...escales, escaleName]);
      setEscaleName('');
      setShowPrompt(false);
    }
  };

  const handleCancel = () => {
    setShowPrompt(false);
  };

  return (
    <div style={{ width: '100%', padding: '20px', textAlign: 'center' }}>
      <Button onClick={handleAddEscale} variant="contained" style={{ backgroundColor: 'orange', color: 'white' }}>
        Ajouter une escale
      </Button>
      {showPrompt && (
        <div>
          <TextField
            type="text"
            value={escaleName}
            onChange={(e) => setEscaleName(e.target.value)}
            placeholder="Nom de l'escale"
            fullWidth
            style={{ marginTop: '10px' }}
          />
          <Button onClick={handleConfirm} variant="contained" style={{ backgroundColor: 'var(--blue)', color: 'white', marginTop: '10px', marginRight: '5px' }}>
            OK
          </Button>
          <Button onClick={handleCancel} variant="contained" style={{ backgroundColor: 'var(--blue)', color: 'white', marginTop: '10px' }}>
            Annuler
          </Button>
        </div>
      )}
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {escales.map((escale, index) => (
          <React.Fragment key={index}>
            <span>{escale}</span>
            {index < escales.length - 1 && <ArrowForwardIcon style={{ margin: '0 5px' }} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
