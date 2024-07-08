import { useState, useEffect } from "react";
import { Typography, Box, CircularProgress } from '@mui/material';

function SingleDegree(props){
    const [degree, setDegree] = useState([])
    const [IsLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/degree/${props.shortcode}/`)
            .then(response => response.json())
            .then(data => {
                setDegree(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [props.shortcode]);

    if(IsLoaded){
        return(<div>{displaySingleDegree(degree)}</div>);
    }
    else{
        return <CircularProgress />;
    }
}

const displaySingleDegree = (degree) => {
    return (
        <Box mt={4} mb={4} textAlign="center">
            <Typography variant="h3" gutterBottom>{degree.full_name}</Typography>
            <Typography variant="h4">Cohorts: {degree.shortcode}</Typography>
        </Box>
    );
}

export default SingleDegree;