import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function AddToDo() {
  return <div>
    {/* <Container maxWidth="lg" sx={{ marginTop: '30px',border: '1px solid grey',boxShadow: 2 }}> */}
      {/* sx={{ border: '2px solid grey' }} */}
      <Typography variant="h2" component="h2" sx={{marginTop:'50px',color:'black'}}>
        To-Do List!
      </Typography>
      {/* <Button variant="outlined" size=''>To-Do List!</Button> */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '75ch' },
          marginTop: '30px'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="To-Do" variant="outlined" />
      </Box>
      {/* style={{textTransform: 'none'} */}
      <Button variant="outlined" style={{ marginTop: 10, marginBottom: '30px', textTransform: 'none' }}>
        Add To-Do</Button>
    {/* </Container> */}
  </div>


}