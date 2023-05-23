import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Students = () => {
    return (
        <Box component="section">
            <Box component="div">
                <Container fixed>
                    <Grid container justifyContent="center">
                        <Grid item xs={8}>
                            <Paper elevation={3} sx={{padding: "1rem"}}>
                                <Typography variant="h4" component="h1" align="center" noWrap gutterBottom>
                                    Create New Student
                                </Typography>
                                <Box component="form">
                                    <Stack spacing={3}>
                                        <Input type="text" variant="outlined" label="First Name" size="small" />
                                        <Input type="text" variant="outlined" label="Last Name" size="small" />
                                        <Input type="email" variant="outlined" label="Email Address" size="small" />
                                        <Input type="tel" variant="outlined" label="Phone Number" size="small" />
                                        <Input type="password" variant="outlined" label="Create Password" size="small" />
                                        <Button text="Submit" variant="contained" size="medium" />
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Students;