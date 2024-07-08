import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container, CircularProgress, Grid, Card, CardContent, Button } from '@mui/material';
import Module from '../models/module';

function Modules() {
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/module/')
            .then(response => response.json())
            .then(data => {
                setModules(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container maxWidth="md">
            {isLoaded ? (
                <Grid container spacing={2}>
                    {displayModules(modules)}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
}

const displayModules = (modules) => {
    return modules.map((elem) => (
        <Grid item xs={12} key={elem.code}>
            <Card>
                <CardContent>
                    <Module code={elem.code} full_name={elem.full_name} ca_split={elem.ca_split} />
                    <Button component={Link} to={`/modules/${elem.code}`} variant="contained" color="primary">
                        Click to view the single module ({elem.code}) information
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    ));
}

export default Modules;
