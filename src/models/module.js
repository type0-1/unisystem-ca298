import React from "react";
import { Typography } from '@mui/material';

function Module({ code, full_name, delivered_to, ca_split }) {
    return (
        <div>
            <Typography variant="h5" gutterBottom>Module Name: {full_name}</Typography>
            <Typography variant="h6" gutterBottom>Module Code: {code}</Typography>
            <Typography variant="body1" gutterBottom>{delivered_to}</Typography>
            <Typography variant="p">CA Marks: {ca_split}</Typography>
        </div>
    ); 
}

export default Module;
