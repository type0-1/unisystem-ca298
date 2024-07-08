import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Module from '../models/module';
import { Typography, Paper, List, ListItem, CircularProgress } from '@mui/material';

function ShowDeliveredTo(){
    const { id } = useParams();
    const [getDelivered, setDelivered] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)
            .then(response => response.json())
            .then(data => {
                setDelivered(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    if (!isLoaded) {
        return <CircularProgress />;
    }

    return (
        <div>
            <Typography variant="h4">Modules Delivered to {id}</Typography>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
                <List>
                    {displayDeliveredTo(getDelivered)}
                </List>
            </Paper>
        </div>
    );
}

const displayDeliveredTo = (getDelivered) => {
    return getDelivered.map((elem) => (
        <ListItem key={elem.code} style={{ marginBottom: '10px' }}>
            <Paper elevation={1} style={{ padding: '10px' }}>
                <Module code={elem.code} full_name={elem.full_name} ca_split={elem.ca_split}/>
            </Paper>
        </ListItem>
    ));
}

export default ShowDeliveredTo;
