import Degrees from '../components/degrees'
import { Typography, Container, Box } from '@mui/material';

function AllDegrees(){
    return(        <
    Container maxWidth="md">
        <Box mt={4} mb={4} textAlign="center">
            <Typography variant="h3" gutterBottom>Degrees</Typography>
        </Box>
        <Degrees />
    </Container>
    )
}

export default AllDegrees;