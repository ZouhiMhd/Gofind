import React, { useState } from 'react';
import { TextField, MenuItem, Button, Grid, Typography } from '@mui/material';

export const About = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleModel: '',
    licensePlate: '',
    additionalInfo: '',
  });

  const vehicleTypes = [
    { value: 'car', label: 'Car' },
    { value: 'motorcycle', label: 'Motorcycle' },
    { value: 'van', label: 'Van' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', width:'100%' }}>
      <Typography variant="h5" gutterBottom>
        Vehicle Information for Carpooling
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}>
          <TextField
            required
            select  
            label="Vehicle Type"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {vehicleTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            label="Vehicle Model"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            label="License Plate"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Additional Information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button type="submit" variant="contained" style={{width:'100%', height:'100%', backgroundColor:'orange'}}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
