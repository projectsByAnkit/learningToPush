import * as React from 'react';
import Container from '@mui/material/Container';
import ToDoCard from './ToDoCard.tsx'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export default function MyToDo() {
    const [showTodo, setShowTodo] = useState(false);
    const getTodo = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const resp = await axios.get("http://localhost:8080/todo");
            const data = await resp.data;
            return data;
        }
        // ,
        // enabled:showTodo
    })
    // console.log("hi" + getTodo.data);
    
    const handleClick = () => {
        setShowTodo(!showTodo);
    }
    var btnName = "";
    if (showTodo == true) btnName = "Hide To-Do";
    else btnName = "Show To-Do";
    return (
        <div>
            {/* <Container maxWidth="lg" sx={{ marginTop: '30px',marginBottom:100,border: '1px solid grey',boxShadow: 2 }}> */}
            {/* <Container maxWidth="sm" sx={{ marginTop: '30px' }}>
                <ToDoCard />
                <ToDoCard />
                <ToDoCard />
                <ToDoCard />
                <ToDoCard />
            </Container> */}
            <Button
                color="secondary" variant="outlined" style={{ marginTop: 10, marginBottom: 10, textTransform: 'none' }}
                onClick={handleClick}
            >{btnName}</Button>
            {showTodo ?
                <Container maxWidth="lg" sx={{ marginTop: '30px', marginBottom: '30px' }}>
                    {
                        <Grid container spacing={3}>
                            {
                                getTodo.data.map((todo) =>
                                    <Grid item xs={4}>
                                        <ToDoCard val={todo.myTodo} tid={todo.id} />
                                    </Grid>
                                )
                            }

                        </Grid>
                    }
                </Container>
                : null}
            {/* </Container> */}
        </div>
    )
}