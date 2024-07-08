import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper } from '@mui/material';

const CreateCohort = ({ apiUrl }) => {
  const [formData, setFormData] = useState({ id: '', year: '', degree: '' });
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const fetchDegrees = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/degree/`);
        if (!response.ok) {
          throw new Error('Failed to fetch degrees');
        }
        const data = await response.json();
        setDegrees(data);
      } catch (error) {
        console.error('Error fetching degrees:', error);
      }
    };

    fetchDegrees();
  }, []);

  const handleChange = (e) => {
    const value = e.target.name === 'year' ? parseInt(e.target.value, 10) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedDegree = degrees.find((degree) => degree.shortcode === formData.degree);

      if (!selectedDegree) {
        throw new Error('Please select a degree');
      }

      const degreeUrl = `http://127.0.0.1:8000/api/degree/${selectedDegree.shortcode}/`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: formData.id, year: formData.year, degree: degreeUrl }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormData({ id: '', year: '', degree: '' });

      alert('Cohort created successfully!');
    } catch (error) {
      alert('Error creating cohort. Please try again.');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
      <Typography variant="h2">Create your new cohort below</Typography>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="id" value={formData.id} onChange={handleChange} label="Cohort ID" variant="outlined" margin="normal" fullWidth/>
        <TextField type="number" name="year" value={formData.year} onChange={handleChange} label="Cohort Year" variant="outlined" margin="normal" fullWidth/>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Select Degree</InputLabel>
          <Select name="degree" value={formData.degree} onChange={handleChange} label="Select Degree" required>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {degrees.map((degree) => (
              <MenuItem key={degree.shortcode} value={degree.shortcode}>
                {degree.shortcode}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Cohort
        </Button>
      </form>
    </Paper>
  );
};

export default CreateCohort;
