import React, { useState, useEffect } from 'react';
import { Typography, Select, MenuItem, TextField, Button, FormControl, InputLabel, Paper } from '@mui/material';

const SetStudentGrade = () => {
  const [cohorts, setCohorts] = useState([]);
  const [students, setStudents] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then(response => response.json())
      .then(data => setCohorts(data))
      .catch(error => console.error('Error fetching cohorts:', error));

    fetch('http://127.0.0.1:8000/api/student/')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));

    fetch('http://127.0.0.1:8000/api/module/')
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/grade/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to add/update grade');
      }

      alert('Grade added/updated successfully');
      // Optionally, you can reset the form after successful submission
      e.target.reset();
    } catch (error) {
      console.error('Error adding/updating grade:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
      <Typography variant="h2">Set Student Grade for Module</Typography>
      <form onSubmit={handleSubmit}>
        {/* Select dropdown for selecting module */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Module</InputLabel>
          <Select name="module" required>
            <MenuItem value="">Select Module</MenuItem>
            {/* Mapping over modules to generate menu items */}
            {modules.map(module => (
              <MenuItem key={module.code} value={`http://127.0.0.1:8000/api/module/${module.code}/`}>
                {module.code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Select dropdown for selecting cohort */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Cohort</InputLabel>
          <Select name="cohort" required>
            <MenuItem value="">Select Cohort</MenuItem>
            {/* Mapping over cohorts to generate menu items */}
            {cohorts.map(cohort => (
              <MenuItem key={cohort.id} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}>
                {cohort.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Select dropdown for selecting student */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Student</InputLabel>
          <Select name="student" required>
            <MenuItem value="">Select Student</MenuItem>
            {/* Mapping over students to generate menu items */}
            {students.map(student => (
              <MenuItem key={student.student_id} value={`http://127.0.0.1:8000/api/student/${student.student_id}/`}>
                ({student.student_id}) {student.first_name} {student.last_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* TextField for CA Mark input */}
        <TextField type="number" name="ca_mark" label="CA Mark" variant="outlined" margin="normal" fullWidth required/>
        {/* TextField for Exam Mark input */}
        <TextField type="number" name="exam_mark" label="Exam Mark" variant="outlined" margin="normal" fullWidth required/>
        {/* Button to submit the form */}
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit Grade</Button>
      </form>
    </Paper>
  );
};

export default SetStudentGrade;
