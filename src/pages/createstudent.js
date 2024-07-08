import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, MenuItem, Paper } from '@mui/material';

const CreateStudent = ({ apiUrl }) => {
  const [formData, setFormData] = useState({ student_id: '', first_name: '', last_name: '', cohort: '' });
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await fetch(apiUrl);
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
  }, [apiUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the cohort link based on the selected cohort ID
      const cohortId = formData.cohort;
      const cohortLink = `http://127.0.0.1:8000/api/cohort/${cohortId}/`;

      // Include the cohort link in the form data
      const updatedFormData = { ...formData, cohort: cohortLink };

      // Reset form after successful submission
      setFormData({ student_id: '', first_name: '', last_name: '', cohort: '' });

      const response = await fetch(`http://127.0.0.1:8000/api/student/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to create student');
      }

      alert('Student created successfully!');
    } catch (error) {
      console.error('Error creating student:', error);
      alert('Error creating student. Please try again.');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
      <Typography variant="h2">Create a new student below</Typography>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="student_id" value={formData.student_id} onChange={handleChange} label="Student ID" variant="outlined" margin="normal" fullWidth required/>
        <TextField type="text" name="first_name" value={formData.first_name} onChange={handleChange} label="First Name" variant="outlined" margin="normal" fullWidth required/>
        <TextField type="text" name="last_name" value={formData.last_name} onChange={handleChange} label="Last Name" variant="outlined" margin="normal" fullWidth required/>
        <TextField select name="cohort" value={formData.cohort} onChange={handleChange} label="Select Cohort" variant="outlined" margin="normal" fullWidth required>
          {cohorts.map(cohort => (
            <MenuItem key={cohort.id} value={cohort.id}>
              {cohort.id}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>Create Student</Button>
      </form>
    </Paper>
  );
};

export default CreateStudent;
