import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Paper, Avatar, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useState } from 'react';
function RegisterModule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user, [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = user;
    console.log(user)
    let config =
    {
      headers:
      {
        'Content-Type': 'application/json'
      }
    };
    setUser("");
    const resp = await axios.post("http://localhost:9000/auth/register", user, config)
    setOpen(false);
    
    if (resp.data.status == 200)
      console.log("user added")
    else
      console.log(resp)
      


  }
  return (
    <div>
      <Button onClick={handleOpen}>Register</Button>
      {/* <Button >Register</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <Paper style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField fullWidth label='Name' placeholder="Enter your name"
                name='name' value={user.name} onChange={handleChange} />
              <TextField fullWidth label='Email' placeholder="Enter your email"
                name='email' value={user.email} onChange={handleChange} />
              <TextField fullWidth label='Password' placeholder="Enter your password"
                name='password' value={user.password} onChange={handleChange} />

              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />
              {/* <Button  type='submit' variant='contained' color='primary' onClick={e => setOpen(false)}>Sign up</Button> */}
              <Button  type='submit' variant='contained' color='primary'>Sign up</Button>

            </form>
          </Paper>
        </Grid>
      </Modal>
    </div>
  )
}

export default RegisterModule;