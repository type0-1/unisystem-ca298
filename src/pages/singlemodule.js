import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Typography, Paper, CircularProgress } from '@mui/material';

function ShowSingleModule(){
    const { code } = useParams();
    const [module, setModule] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/${code}`)
            .then(response => response.json())
            .then(data => {
                setModule(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [code]);

    if (!isLoaded) {
        return <CircularProgress />;
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
            {displayModuleInfo(module)}
        </Paper>
    );
}

const displayModuleInfo = (module) => {
    return (
        <div>
            <Typography variant="h5">Module Code: {module.code}</Typography>
            <Typography variant="h6">Module Name: {module.full_name}</Typography>
            <Typography variant="p">CA Split: {module.ca_split}</Typography>
        </div>
    );
}

export default ShowSingleModule;
