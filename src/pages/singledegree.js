import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import SingleDegree from '../components/singledegree';
import Cohort from '../models/cohort';
import { Container, CircularProgress, Typography, Grid, Card, CardContent } from '@mui/material';

function ShowSingleDegree() {
    const { shortcode } = useParams();
    const [getCohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
            .then(response => response.json())
            .then(data => {
                setCohorts(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [shortcode]);

    if (!isLoaded) {
        return <CircularProgress />;
    }

    return (
        <div>
            <Container maxWidth="md">
            <SingleDegree shortcode={shortcode} />
            {displayCohortInfo(getCohorts)}
            </Container>
        </div>
    );
}

const displayCohortInfo = (getCohorts) =>{
    return(
        <div>
            <Grid container spacing={2}>
                {getCohorts.map(cohort => (
                    <Grid item xs={12} key={cohort.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    <Cohort id={cohort.id} year={cohort.year} name={cohort.name} />
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}
export default ShowSingleDegree;
