import theme from './global/theme'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { useUsers } from './global/useUsers';
import { useState } from 'react';
import { Layout } from './global/Layout';

function App() {
  const {users,error,fetchUsers} = useUsers();
  const [endUrl,setEndUrl] = useState('');

  if (error) return <p>ユーザーの取得に失敗しました。</p>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Layout users={users} fetchUsers={fetchUsers} endUrl={endUrl} setEndUrl={setEndUrl} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
