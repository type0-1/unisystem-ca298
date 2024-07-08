import Modules from '../components/modules';
import { Typography, Container, Box } from '@mui/material';

function AllModules() {
    return (
        <Container maxWidth="md">
            <Box mt={4} mb={4} textAlign="center">
                <Typography variant="h3" gutterBottom>Modules</Typography>
            </Box>
            <Modules />
        </Container>
    );
}

export default AllModules;
