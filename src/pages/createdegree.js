import React, { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@mui/material';

const CreateDegree = ({ apiUrl }) => {
  const [formData, setFormData] = useState({ full_name: '', shortcode: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset form after successful submission
      setFormData({ full_name: '', shortcode: '' });
      alert('Degree created successfully!');
    } catch (error) {
      console.error('Error creating degree:', error);
      alert('Error creating degree. Please try again.');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
      <Typography variant="h2">Create your new degree below</Typography>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="full_name" value={formData.full_name} onChange={handleChange} label="Degree Name" variant="outlined" margin="normal" fullWidth/>
        <TextField type="text" name="shortcode" value={formData.shortcode} onChange={handleChange} label="Degree Shortcode" variant="outlined" margin="normal" fullWidth/>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Degree
        </Button>
      </form>
    </Paper>
  );
};

export default CreateDegree;
