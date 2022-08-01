import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Paper, Avatar, TextField} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function RegisterModule() {
  const [inputs, setInputs] = React.useState([]);
  const [uname, setuname] = React.useState();
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }

  const handleSubmit = (event) => {
    event.preventDefault();
    let input ={
        uname,
        email,
        password
      }
      setInputs([...inputs,input]);
      setpassword('');
      setuname('');
      setemail('');
      setOpen(false);

  }
  return (
    <div>
    <Button onClick={handleOpen}>Register</Button>
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
                  <TextField fullWidth label='Name' placeholder="Enter your name" value={uname} 
      name='name' onChange={(e)=>setuname(e.target.value)}/>
                  <TextField fullWidth label='Email' placeholder="Enter your email" value={email} 
       name='email' onChange={(e)=>setemail(e.target.value)}/>
                  <TextField fullWidth label='Password' placeholder="Enter your password" value={password} 
       name='password' onChange={(e)=>setpassword(e.target.value)}/>
                  <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" value={password} 
   name='password' onChange={(e)=>setpassword(e.target.value)}/>
                  <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="I accept the terms and conditions."
                  />
                  <Button type='submit' variant='contained' color='primary'>Sign up</Button>
              </form>
          </Paper>
      </Grid>
    </Modal>
  </div>
  )
}

export default RegisterModule;