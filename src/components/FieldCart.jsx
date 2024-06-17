import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinIcon from '../assets/pin.png';

// Creating a custom icon for the marker
const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [38, 38], // size of the icon
});

export const FieldCart = ({ name }) => {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [showMap, setShowMap] = useState(false);

  // Function to handle click on the map
  const handleMapClick = async (e) => {
    console.log('Clicked on map:', e.latlng);
    setPosition(e.latlng);

    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`);
      const data = await res.json();
      if (data && data.display_name) {
        setLocationName(data.display_name);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  return (
    <>
      <TextField
        label="Localisation"
        value={locationName}
        style={{ flex: 1, borderRadius: 20, padding: '10px', width: '100%' }}
        fullWidth
        placeholder={name}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <LocationOnIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onClick={() => setShowMap(!showMap)}
      />
      {showMap && (
        <MapContainer center={[7.3697, 12.3547]} zoom={6} style={{ height: '400px', marginTop: '20px' }} onClick={handleMapClick}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {position && (
            <Marker position={position} icon={customIcon}>
              <Popup>Votre emplacement</Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </>
  );
};
