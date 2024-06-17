import React from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FieldCart } from './FieldCart';
import { Link } from 'react-router-dom';

const style={
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding : "10px",
  gap: 8, // Espace entre les éléments
}
export const Informations = () => {
  return (
    <div>
      <div style={style}>
        <TextField style={{ flex: 1, borderRadius: 20, padding:'10px', width:'20%'}} variant="outlined" placeholder="Aujourd'hui" />
        <TextField style={{ flex: 1, borderRadius: 20, padding:'10px', width:'20%' }} variant="outlined" placeholder="Passagers" />
        <FieldCart  name="Départ"/>
        <FieldCart style={{ flex: 1, borderRadius: 20, padding:'10px', width:'20%' }} name="Destination"/>
        <Button style={{ borderRadius: 10, height: '80px', width: '50%', flex: 1 , backgroundColor:'orange'}} variant="contained" color="primary">
        Publier Votre Trajet
        </Button>
      </div>
      <div style={{
         height: 500,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-around',
         gap: 8, // Espace entre les éléments
      }}>
        <div >
          <img src="../../public/img/happycar.png" style ={{width:'60%'}}/>
        </div>
       
        <Button style={{ borderRadius: 10, height: '80px', width: '30%',backgroundColor:"var(--blue)" }} variant="contained" color="primary">
        <Link to='/driver' style={{color:'white', textDecoration:'none'}}>Je partage mon véhicule</Link>
        </Button>
        
        
        <Button style={{ borderRadius: 10, height: '80px', width: '30%',  backgroundColor:"var(--blue)" }} variant="contained" color="primary">
          <Link to='/passenger' style={{color:'white', textDecoration:'none'}}>Je cherche un véhicule</Link>
        </Button>
      </div>
    </div>
  );
};
