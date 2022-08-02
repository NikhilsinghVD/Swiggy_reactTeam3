import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >

  </Box>
);

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function CustomerSupport() {
  return (

    <React.Fragment height={"200%"} width={"200%"}>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12} md={12} container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" component="div" textAlign={"center"} marginTop={"2%"} marginBottom>
                <b> CUSTOMER SUPPORT</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>

                    <Typography variant="h5" component="div" color="blue" marginTop={"1%"} marginBottom>
                      <b> KNOWLEDGE BASE</b>
                    </Typography>

                    <Typography variant="body1" textAlign={"left"} marginTop={"1%"}>
                      Dolore commodo ea excepteur, do irure praetermissum aut enim proident aut laboris, an lorem irure ullamco
                      Dolore commodo ea excepteur, do irure praetermissum aut enim proident aut laboris, an lorem irure ullamco
                      Dolore commodo ea excepteur, do irure praetermissum aut enim proident aut laboris, an lorem irure ullamco
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="success">
                      <b>View all</b>
                    </Button>
                  </CardActions>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>

                    <Typography variant="h5" component="div" color="red" marginTop={"1%"} marginBottom>
                      <b> SUPPORT FORUM</b>
                    </Typography>

                    <Typography variant="body1" textAlign={"left"}>
                      Elit a excepteur quo summis. Summis qui expetendis e elit de dese exercitation, iis quem summis si quo elit
                      Elit a excepteur quo summis. Summis qui expetendis e elit de dese exercitation, iis quem summis si quo elit
                      Elit a excepteur quo summis. Summis qui expetendis e elit de dese exercitation, iis quem summis si quo elit
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack spacing={2} direction="row">
                      <ColorButton variant="contained"><b> JOIN OUR FORM  </b></ColorButton>
                    </Stack>
                  </CardActions>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>

                    <Typography variant="h5" component="div" color="orange" marginTop={"1%"} marginBottom>
                      <b> FAQ </b>
                    </Typography>

                    <Typography variant="body1" textAlign={"left"}>
                      Te sed velit cupidatat. E fugiat tractavissent o ut pariatur ne deserunt ab dolore qui nescius eu irure quo cubit lorem
                      Te sed velit cupidatat. E fugiat tractavissent o ut pariatur ne deserunt ab dolore qui nescius eu irure quo cubit lorem
                      Te sed velit cupidatat. E fugiat tractavissent o ut pariatur ne deserunt ab dolore qui nescius eu irure quo cubit lorem
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">
                      <b> VIEW ALL</b>
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>

            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="BigCo Inc. logo"
                height="100%"
                width="100%"
                image="https://media.istockphoto.com/photos/portrait-of-a-young-businessman-using-a-headset-in-a-modern-office-picture-id1371553731?b=1&k=20&m=1371553731&s=170667a&w=0&h=g56jBJ4y9sjmGvDEtJJmlvAqr-TpUJAdBqwHaUsRROM="
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ minWidth: 275 }} height={"100%"} width={"100%"}>
                <CardContent >
                  <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
                    <b>CONTACT US</b>
                  </Typography>
                  <Typography variant="h6" component="div">
                    <b> HAVE A QUESTION ? </b>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Yourname" variant="outlined" />
                      <TextField id="outlined-basic" label="Email" variant="outlined" />
                      <TextField
                        id="filled-multiline-static"
                        label="Your Question"
                        multiline
                        rows={5}
                        defaultValue=" "
                        variant="filled"
                      />
                    </Box>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained"><b> SEND MESSAGE</b></Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="BigCo Inc. logo"
                height="80%"
                width="100%"
                image="https://s3.ap-southeast-2.amazonaws.com/www.cryptoknowmics.com/blog/wp-content/uploads/2020/05/01130753/inbound-call-centers.jpg"
              />
            </Grid>

          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}
export default CustomerSupport
