import { useParams } from 'react-router-dom'; // Grab the shortcode from the URL parameter
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { Box, Button, CircularProgress } from '@mui/material';

import Student from '../models/student';

function ShowSingleCohort(){
    const { id } = useParams();
    const [getStudents, setStudents] = useState([])
    const [IsLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/?cohort=${id}`)
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);
    if(IsLoaded){
        return(<div><h2>Students in ({id})</h2>{displayCohortInfo(getStudents)}</div>)
    }
    else{
        return <CircularProgress />;
    }
}


const displayCohortInfo = (getStudents) => {
    return (
        <Box mt={2}>
            {getStudents.map((elem) => (
                <Box key={elem.student_id} mb={2} p={2} border={1} borderColor="grey.400">
                    <Student student_id={elem.student_id} first_name={elem.first_name} last_name={elem.last_name} email={elem.email} />
                    <Link to={`/student/${elem.student_id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">
                                View more info on ({elem.student_id})
                            </Button>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}

export default ShowSingleCohort 