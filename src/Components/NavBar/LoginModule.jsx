import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,Paper, 
    Avatar, TextField,Checkbox
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link} from "react-router-dom";
function LoginModule() {
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
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
              <TextField label='Username' placeholder='Enter username' fullWidth required/>
              <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
              <FormControlLabel
                  control={
                  <Checkbox
                      name="checkedB"
                      color="primary"
                  />
                  }
                  label="Remember me"
               />
              <Button onClick={handleClose} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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