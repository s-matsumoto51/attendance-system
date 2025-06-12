import { Box, Grid, Paper, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const UsersList = ({users}) => {
  const [value, setValue] = useState(0);
  console.log(users);
  const handleChange = (e,newValue)=>{
    setValue(newValue)
  }
  return (
    <Box mt={'20px'} >
      <Typography variant="h5">ユーザー一覧</Typography>
      <Box p={'20px'}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='出勤中'/>
          <Tab label='退勤'/>
        </Tabs>
      </Box>
      <Grid container m={'0 350px 0 350px'}>
        {users
          .filter((data) => Number(data.status) === value)
          .map((data, index) => (
            <Grid size={12} mb={2} key={index}>
              <Item>{data.name}</Item>
            </Grid>
          ))}
      </Grid>
      
      
    </Box>
  );
};

export default UsersList;
