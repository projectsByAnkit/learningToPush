import { useState } from 'react';
import './App.css';
import AddToDo from './Components/AddToDo.tsx'
import MyToDo from './Components/AllToDo.tsx';
import ToDoCard from './Components/ToDoCard.tsx';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <div className="App">
      <Container maxWidth="lg"
        sx={{
          marginTop: '30px', marginBottom: '30px',
          border: '1px solid grey', boxShadow: 2,
          maxHeight:800
        }}
      >
      {/* <Typography variant="h2" component="h2" sx={{marginTop:'50px'}}>
        To-Do List!
      </Typography> */}
      <AddToDo />
      <MyToDo />
      </Container>
    </div>
  );
}

export default App;
