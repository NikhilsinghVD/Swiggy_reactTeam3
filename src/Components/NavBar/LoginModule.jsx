import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,Paper, 
    Avatar, TextField,Checkbox
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function LoginModule({setToken}) {
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const navigate= useNavigate();
const [user, setUser] = useState(
  {
    email:"",
    password:""
  }
)

const handleChange = e => {
  const {name, value}=e.target;
  setUser({
    ...user,[name]:value
  })
}

const handleSubmit = async e => {
  e.preventDefault();
  const {email, password} = user;
  console.log(user)
  let config =
  {
headers :
{
  'Content-Type':'application/json'
}
  };
  const resp = await axios.post("http://localhost:9000/auth/login", user, config)
  console.log(resp.data);
  let token= resp.data;
  if(token!=null) 
  localStorage.setItem("token", token.access_token)
  if(user.email===email && user.password===password){
    navigate("/product")
  }

}
  return (
    <div>
    <Button onClick={handleOpen}>Login</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
       <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                   <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2>Sign In</h2>
              </Grid>
              <form onSubmit={handleSubmit}>
              <TextField label='Email' placeholder='Enter Email' name="email" value={user.email} onChange={handleChange} fullWidth required/>
              <TextField label='Password' placeholder='Enter password' type='password' name="password" value={user.password} onChange={handleChange} fullWidth required/>
              <FormControlLabel                                     
                  control={
                  <Checkbox
                      name="checkedB"
                      color="primary"
                  />
                  }
                  label="Remember me"
               />
              <Button  type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
              </form>
              <Typography >
                   <Link to="" >
                      Forgot password ?
              </Link>
              </Typography>
          </Paper>
      </Grid>
    </Modal>
  </div>
  )
}

export default LoginModule;