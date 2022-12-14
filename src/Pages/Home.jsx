import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import Corousel from '../Components/Corousel';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import {Link} from 'react-router-dom';

function Home() {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4001/restuarantsList")
      .then(response => {
        console.log("res", response)
        setdata(response.data)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <Box>
      <Container>
        <Corousel />
      </Container>
      <Box sx={{ mr: 2, backgroundImage: "https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}>
        <Container>
          <FormGroup sx={{ width: 600 }}>
            {/* <FormControl>
              <InputLabel htmlFor="my-input">Restaurent name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Please Write Restaurent name here</FormHelperText>
            </FormControl> */}
            <FormControl>
              <InputLabel htmlFor="my-input">City</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Please Write Your City here</FormHelperText>
            </FormControl>
            <Link to="/product">
            <Button size='medium' variant='contained'>Search</Button>
            </Link>
          </FormGroup>
        </Container>
      </Box>

      <Box>
        <Container>
          <Typography variant='h3' sx={{ color: "#f76f72" }}>Recommendations:</Typography>
          <Marquee play="true" loop={100} speed={30} gradientWidth={5}>
            {
              data.map((el) => {
                return <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={el.resImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.resTitle}
                    </Typography>

                  </CardContent>
                  
                </Card>

              })
            }
          </Marquee>
        </Container>
      </Box>
    </Box>
  );
}

export default Home