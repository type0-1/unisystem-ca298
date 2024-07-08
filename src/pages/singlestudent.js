import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Typography, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

function ShowSingleStudent(){
    const { student_id } = useParams();
    const [student, setStudent] = useState({});
    const [modules, setModules] = useState([]);
    const [grades, setGrades] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/${student_id}`)
            .then(response => response.json())
            .then(data => {
                setStudent(data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));

        fetch('http://127.0.0.1:8000/api/module/')
            .then(response => response.json())
            .then(data => {
                const studentModules = data.filter(module =>
                    module.delivered_to.some(url => url.includes(student.cohort))
                );
                setModules(studentModules);
            })
            .catch(err => console.log(err));
        
        fetch(`http://127.0.0.1:8000/api/grade/?student=${student_id}`)
            .then(response => response.json())
            .then(data => {
                setGrades(data);
            })
            .catch(err => console.log(err));
    }, [student_id, student.cohort]); 

    if (!isLoaded) {
        return <CircularProgress />;
    }

    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            {displayInfo(student, modules, grades)}
        </Paper>
    );
}

const displayInfo = (student, modules, grades) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div>
                <Typography variant="h4" align="center">Student Info</Typography>
                <Paper elevation={1} style={{ padding: '20px', marginBottom: '20px' }}>
                    <List>
                        <ListItem>
                            <ListItemText primary={`Student ID: ${student.student_id}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`First Name: ${student.first_name}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Last Name: ${student.last_name}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Email: ${student.email}`} />
                        </ListItem>
                    </List>
                </Paper>
            </div>
            <div>
                <Typography variant="h4" align="center">Modules</Typography>
                <Paper elevation={1} style={{ padding: '20px', marginBottom: '20px' }}>
                    <List>
                        {modules.map(module => (
                            <ListItem key={module.code}>
                                <ListItemText primary={`${module.code}: ${module.full_name}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </div>
            <div>
                <Typography variant="h4" align="center">Grades</Typography>
                <Paper elevation={1} style={{ padding: '20px' }}>
                    <List>
                        {grades.map(grade => (
                            <ListItem key={grade.id}>
                                <ListItemText primary={`Grade For Module - ${grade.module.split('/')[5]}: ${grade.total_grade}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </div>
        </div>
    );
}

export default ShowSingleStudent;
