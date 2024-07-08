import { Typography, Paper } from '@mui/material';

function Cohort({id, year, degree, name}) {
    return (
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Cohort: {id}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Cohort Year: {year}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Cohort Name: {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {degree}
            </Typography>
        </Paper>
    );
}

export default Cohort;
