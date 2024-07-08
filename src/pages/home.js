import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom align="center">Welcome to EduConnect</Typography>
      <Typography variant="h6" gutterBottom align="center">View our services below</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                View All Degrees
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Browse through all of our available degrees
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                View All Cohorts
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore all cohorts available
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional cards for navigation links */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                View All Modules
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore all of our available modules
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Degree
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Start creating your own degree
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Cohort
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Start creating your own cohort
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Module
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Create your own module
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Student
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Add new students to the EduConnect platform
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Set Student Grade
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Manage student grades and track their academic progress.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
