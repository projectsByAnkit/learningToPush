import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

// const card = (
//     <React.Fragment>
//         <CardContent>
//             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 Word of the Day
//             </Typography>
//             <Typography variant="h5" component="div">
//                 be{bull}nev{bull}o{bull}lent
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 adjective
//             </Typography>
//             <Typography variant="body2">
//                 well meaning and kindly.
//                 <br />
//                 {'"a benevolent smile"'}
//             </Typography>
//         </CardContent>
//         <CardActions style={{ justifyContent: 'center' }}>
//             {/* <Button size="small" variant="contained">Mark as Completed</Button> */}
//             <ButtonGroup variant="outlined" aria-label="Basic button group" >
//                 <Button color="success" style={{ textTransform: 'none' }}>Mark as Completed</Button>
//                 <Button color="secondary" style={{ textTransform: 'none' }}>Update</Button>
//                 <Button color="error" style={{ textTransform: 'none' }}>Delete</Button>
//             </ButtonGroup>
//         </CardActions>
//     </React.Fragment>
// );

export default function OutlinedCard(props) {
    const handleDelete=()=>{
        
    }
    return (
        <Box sx={{ maxWidth: 350, }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="div">
                        {props.val}
                        </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {props.val}
                        </Typography> */}
                        {/* <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography> */}
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        {/* <Button size="small" variant="contained">Mark as Completed</Button> */}
                        <ButtonGroup variant="outlined" aria-label="Basic button group" >
                            <Button color="success" style={{ textTransform: 'none' }}>Mark as Completed</Button>
                            <Button color="secondary" style={{ textTransform: 'none' }}>Update</Button>
                            <Button color="error" style={{ textTransform: 'none' } }>Delete</Button>
                        </ButtonGroup>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}