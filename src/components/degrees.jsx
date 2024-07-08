import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Typography, Container, List, ListItem, ListItemText, Button, CircularProgress } from '@mui/material';

function Degrees(){
    const [degrees, setDegrees] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/degree/')
            .then(response => response.json())
            .then(data => {
                setDegrees(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);
    
    if(!isLoaded){
        return <CircularProgress />;
    }

    return (
        <Container maxWidth="md">
            <List>
                {displayDegrees(degrees)}
            </List>
        </Container>
    );
}

const displayDegrees = (degrees) =>{
    return degrees.map((elem) => (
        <ListItem key={elem.shortcode} alignItems="flex-start">
            <ListItemText
                primary={elem.full_name}
                secondary={<Typography component="span" variant="body2" color="textSecondary">
                    Click the link below to view the single degree and its cohorts
                </Typography>}
            />
            <Button component={Link} to={`/degrees/${elem.shortcode}`} variant="contained" color="primary">
                View Details
            </Button>
        </ListItem>
    ));
}

export default Degrees;
