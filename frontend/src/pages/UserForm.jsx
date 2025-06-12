import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";

export const UserForm =({fetchUsers})=>{
    const [forms,setForms] = useState({
        name:'',
        email:'',
        telNo:'',
        address:'',
        status:'0'
    }); 
    const contents = [
        {title:'名前',name:'name'},
        {title:'メールアドレス',name:'email'},
        {title:'電話番号',name:'telNo'},
        {title:'住所',name:'address'},
    ];

    const handleChange = (e)=>{
         setForms({...forms,[e.target.name]:e.target.value})
    }

    const handleSubmit= async()=>{
        // console.log(forms)
        if (!forms.name || !forms.email || !forms.telNo || !forms.address) {
            alert('すべての項目を入力してください');
            return;
         }
        try{
            await axios.post("http://localhost:5273/api/users", forms);
            fetchUsers();
        }catch{
            alert('matigai')
        }
    }
    return (
        <Container sx={{mt:'50px'}} >
            <Typography variant="h4" textAlign={'center'}>アカウント登録</Typography>
            <Box bgcolor={'white'} sx={{boxShadow: 4,}} m={'50px 0 50px 0'} >
                <Box p={'0 0 30px 0'} >
                    {contents.map((data)=>{return(
                    <Grid container spacing={0} sx={{borderBottom: '1px solid #212121'}}>
                        <Grid size={3} sx={{backgroundColor:'secondary.main',display: 'flex', alignItems: 'center'}}>
                            <Box p={'30px'}>
                                <Typography variant="h6" color="white">{data.title}</Typography>
                            </Box>
                        </Grid>
                        <Grid size={9} sx={{}}>
                            <Box p={'30px 100px 30px 30px'}>
                                <TextField
                                    name={data.name}
                                    id="outlined-multiline-flexible"
                                    label={data.title}
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    )})}
                </Box>
                <Box p={'0 20px 20px 0'} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                        variant="contained" 
                        sx={{ width: '100px', color:'white' }} 
                        onClick={handleSubmit}
                        disabled={!forms.name || !forms.email || !forms.telNo || !forms.address}
                        >送信</Button>
                </Box>
            </Box>
        </Container>
    )
}
