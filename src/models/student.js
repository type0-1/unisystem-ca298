import React from 'react';
import { Typography, Box } from '@mui/material';

const Student = ({ student_id, first_name, last_name, cohort, email }) => {
    return (
        <Box marginBottom={2}>
            <Typography variant="subtitle1">Student ID: {student_id}</Typography>
            <Typography variant="body1">First Name: {first_name}</Typography>
            <Typography variant="body1">Last Name: {last_name}</Typography>
            <Typography variant="body1">Email: {email}</Typography>
            <Typography variant="body1">{cohort}</Typography>
        </Box>
    );
}

export default Student;
