import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = ({endUrl}) => {
  const pages = ['出勤', 'ユーザー一覧', 'ユーザー登録','ログイン'];
  const navigate = useNavigate();

  const onClickNav =(page)=>{
    if(page==='出勤'){
        navigate(`/attend/${endUrl}`)
    }else if( page === 'ユーザー一覧' ) {
        navigate('/users')
    }else if(page === 'ログイン' ){
        navigate('/')
    }else{navigate('/userform')}
  }

  return (
    <AppBar position="static" color='secondary'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=>onClickNav(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
