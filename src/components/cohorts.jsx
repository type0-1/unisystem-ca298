import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { Container, CircularProgress, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Cohorts(){
    const [cohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/cohort/')
            .then(response => response.json())
            .then(data => {
                setCohorts(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    if(isLoaded){
        return(
            <div>
                {displayCohorts(cohorts)}
            </div>
        );
    }
    else{
        return <CircularProgress />;
    }
}

const displayCohorts = (cohorts) =>{
   return(
   <Container maxWidth="md">
                <Grid container spacing={2}>
                    {cohorts.map(cohort => (
                        <Grid item xs={12} key={cohort.id}>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        {cohort.name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Year: {cohort.year}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        View all of our students in this cohort
                                    </Typography>
                                    <Button component={Link} to={`/cohorts/${cohort.id}`} variant="contained" color="primary" sx={{ mr: 1 }}>
                                        View students
                                    </Button>
                                    <Typography variant="body2" component="p">
                                        View modules delivered to this cohort
                                    </Typography>
                                    <Button component={Link} to={`/delivered_to/${cohort.id}`} variant="contained" color="secondary">
                                        View modules
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
   )
}
export default Cohorts;
