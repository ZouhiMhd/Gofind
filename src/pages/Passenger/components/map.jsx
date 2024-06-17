
import { TextField,  InputAdornment, IconButton } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../../../assets/pin.png';
import NodeGeocoder from 'node-geocoder'
import React, { useState } from 'react';;

export const Map = () => {
    const [position, setPosition] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [showMap, setShowMap] = useState(false);
  
    // Function to handle click on the map
    const handleMapClick = async (e) => {
      console.log('Clicked on map:', e.latlng);
      setPosition(e.latlng);
      try {
        const res = await geocoder.reverse({ lat: e.latlng.lat, lon: e.latlng.lng });
        if (res && res[0] && res[0].formattedAddress) {
          setLocationName(res[0].formattedAddress);
        }
      } catch (error) {
        console.error('Error fetching location name:', error);
      }
    };
  
  return (
    <>
      
      <MapContainer  center={[7.3697, 12.3547]} zoom={6} style={{ height: '400px', marginTop: '20px' }} onClick={()=>{handleMapClick; console.log('réussi')}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {position && <Marker position={position} icon={icon}><Popup>Votre emplacement</Popup></Marker>}
        </MapContainer>
    </>
  )
}
