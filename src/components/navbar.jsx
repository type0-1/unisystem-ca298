import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#04151F' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EduConnect
          </Typography>
          <nav>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Home</Button>
            </Link>
            <Link to="/degrees" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>View Degrees</Button>
            </Link>
            <Link to="/cohorts" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>View Cohorts</Button>
            </Link>
            <Link to="/modules" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>View Modules</Button>
            </Link>
            <Link to="/createdegree" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Create Degree</Button>
            </Link>
            <Link to="/createcohort" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Create Cohort</Button>
            </Link>
            <Link to="/createmodule" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Create Module</Button>
            </Link>
            <Link to="/createstudent" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Create Student</Button>
            </Link>
            <Link to="/setgrade" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" sx={{ fontSize: '0.7rem' }}>Set Student Grade</Button>
            </Link>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
