import { Banner} from '../../components/Banner'
import { TextField,  InputAdornment, IconButton } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../../assets/pin.png';
import NodeGeocoder from 'node-geocoder'
import React, { useState } from 'react';
import { PersonTable } from './components/PersonTable';
import { Map } from './components/map';
import { Escale } from './components/Escale';
import { About } from './components/about';
import SideBarCar from '../../components/SideBarCar';

function Driver() {
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
    <div style={{display:'flex'}}>
      <div style={{width:'28%'}}>
        <SideBarCar/>
      </div>
      <div style={{width:'100%'}}>
        <Map/>
        <About/>
        <Escale/>
        <PersonTable/>
      </div>
    </div>
      
      
    </>
  )
}

export default Driver
