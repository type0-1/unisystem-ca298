import Cohorts from '../components/cohorts'
import { Typography, Container, Box } from '@mui/material';

function AllCohorts(){
    return(
    <Container maxWidth="md">
        <Box mt={4} mb={4} textAlign="center">
            <Typography variant="h3" gutterBottom>Cohorts</Typography>
        </Box>
        <Cohorts />
    </Container>
    );
}

export default AllCohorts;