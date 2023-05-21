import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useEffect, useState } from "react";
import { Post } from "./Configs/Axios";

const App = () => {
  const [body, setBody] = useState({});
  const newPost = () => {
    Post("/api/persons").then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <>
      <Box component="section">
        <Box component="div">
          <Container fixed>
            <Grid container justifyContent="center">
              <Grid item xs={6}>
                <Paper elevation={3} sx={{padding: "1rem"}}>
                  <Typography variant="h4" component="h2" align="center" gutterBottom noWrap>Add Persons</Typography>
                  <Box component="form">
                    <Stack flexDirection="column" gap={3}>                      
                      <Input type="text" name="name" label="Name" variant="outlined" size="small" 
                        handle={(e) => setBody({...body, name: e.target.value})} />
                      <Input type="text" name="age" label="Age" variant="outlined" size="small" 
                        handle={(e) => setBody({...body, age: e.target.value})} />
                      <Button text="Send" variant="contained" size="medium" handle={() => newPost()} />
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;