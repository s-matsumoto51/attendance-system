import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";

export const UserAttend =({users,fetchUsers})=>{
    const {email} = useParams();
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    
    const getUser = users.find(data=>
        data.email === email
    );

    const [userStatus, setUserStatus] = useState(undefined);

    useEffect(() => {
        if (getUser) {
            setUserStatus(getUser.status);
        }
    }, [getUser]);

    useEffect(() => {
        const timer = setInterval(() => {
        setNow(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000);

        // コンポーネントのアンマウント時にタイマー停止
        return () => clearInterval(timer);
    }, []);

    const changeStatus = async (status)=>{
        try { 
            await axios.patch(`http://localhost:5273/api/users/${getUser.id}`,{status:status});
            setUserStatus(Number(status))
        } finally { 
            fetchUsers();
        }
    }

    if (!users.length) {
        return <Typography>ユーザー情報取得中...</Typography>
    }

    return (
        <Container 
         sx={{ mt: '30px' }}
         justifyContent="center"
         alignItems="center"
         >
            <Typography variant="h4" align="center" mb={2}>{getUser.name}</Typography>            
            <Typography variant="h4" align="center">{now}</Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="60vh"
                width="100%"
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item size={6}>
                        <Button 
                         fullWidth 
                         variant="contained"
                         disabled={userStatus === '0'} 
                         onClick={()=>changeStatus('0')} 
                         sx={{ 
                            minHeight: 150,
                            minWidth:150,
                         }} 
                         >出勤
                         </Button>
                    </Grid>
                    <Grid item size={6}>
                        <Button 
                         disabled={userStatus === '1'} 
                         fullWidth variant="contained" 
                         color="primary" 
                         onClick={()=>changeStatus('1')} 
                         sx={{ 
                            minHeight: 150,
                            minWidth:150,
                         }}
                        >
                            退勤
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}