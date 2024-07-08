import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel, Paper } from '@mui/material';

const CreateModule = ({ apiUrl }) => {
  const [formData, setFormData] = useState({ code: '', full_name: '', delivered_to: [], ca_split: '' });
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/cohort/`);
        if (!response.ok) {
          throw new Error('Failed to fetch cohorts');
        }
        const data = await response.json();
        setCohorts(data);
      } catch (error) {
        console.error('Error fetching cohorts:', error);
      }
    };

    fetchCohorts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCohortChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, delivered_to: [...formData.delivered_to, value] });
    } else {
      setFormData({ ...formData, delivered_to: formData.delivered_to.filter(cohortId => cohortId !== value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert cohort IDs to API links
      const cohortUrls = formData.delivered_to.map(cohortId => `http://127.0.0.1:8000/api/cohort/${cohortId}/`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, delivered_to: cohortUrls }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormData({ code: '', full_name: '', delivered_to: [], ca_split: '' });

      alert('Module created successfully!');
    } catch (error) {
      console.error('Error creating module:', error);
      alert('Error creating module. Please try again.');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
      <Typography variant="h2">Create New Module</Typography>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="code" value={formData.code} onChange={handleChange} label="Module Code" variant="outlined" margin="normal" fullWidth required/>
        <TextField type="text" name="full_name" value={formData.full_name} onChange={handleChange} label="Module Full Name" variant="outlined" margin="normal" fullWidth required/>
        <div>
          <Typography variant="h3">Select Cohorts:</Typography>
          {cohorts.map(cohort => (
            <FormControlLabel
              key={cohort.id}
              control={
                <Checkbox
                  name="delivered_to"
                  checked={formData.delivered_to.includes(cohort.id)}
                  onChange={handleCohortChange}
                  value={cohort.id}
                />
              }
              label={cohort.id}
            />
          ))}
        </div>
        <TextField type="text" name="ca_split" value={formData.ca_split} onChange={handleChange} label="CA Split" variant="outlined" margin="normal" fullWidth required/>
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default CreateModule;
