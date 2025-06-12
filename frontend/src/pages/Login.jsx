import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login =({users,setEndUrl})=>{
    const [id,setId] = useState();
    const [email,setEmail] = useState('');

    const navigate = useNavigate();

    const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "400px",
    width: "400px",
    variant: "outlined",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    padding:'20px'
    };
  const onSubmitHandle = () =>{

    const matched = users.find(user =>
        user.id.toString() === id && user.email === email
    );
    if (matched){
        setEndUrl(matched.email)
        navigate(`/attend/${matched.email}`)
    }else{
        alert('No Match')
    }
    
  }
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
            padding={2}
        >
            <Card style={cardStyle}>
                <CardHeader title={'Login'}/>
                <CardContent>
                    <Box>
                        <TextField
                         fullWidth
                         id="username"
                         type="text"
                         label="Id"
                         placeholder="Id"
                         margin="normal"
                         value={id}
                         onChange={(e)=>setId(e.target.value)}
                        />
                        <TextField
                         fullWidth
                         id="email"
                         type="email"
                         label="email"
                         placeholder="email"
                         margin="normal"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', padding: '16px' }}>
                    <Button 
                     variant="contained"
                     onClick={onSubmitHandle}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}