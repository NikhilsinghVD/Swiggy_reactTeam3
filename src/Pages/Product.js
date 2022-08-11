
import {  Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import { Menu, ShoppingCart, Star, StarBorderOutlined } from '@material-ui/icons';
import Axios from 'axios';
import { Link } from 'react-router-dom';


export default function Product() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function productlist() {
      try {
        const mydata = await Axios.get(" http://localhost:4001/restuarantsList")
        setData(mydata.data)
      } catch (err) {
        console.log(err)
      }
    };
    productlist();
  }, []);

  return (
    <div>
      {/* <Paper elevation={4} style={{ height: "100px" }}>
        <Typography variant='h4' style={{ textAlign: "center" }}>City</Typography>
      </Paper> */}
      <Grid container spacing={3} style={{ marginTop: "60px" }}>
        {
          data.map((data) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Link to='/cards'>
                <Card className='d-flex justify-content-around' >

                  <CardActionArea>
                    <CardMedia

                      component="img"
                      height="140"
                      src={data.resImg}
                      alt="Image"

                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.resTitle}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {data.food}
                      </Typography>
                      {data.star} */}
                    </CardContent>
                  </CardActionArea>

                </Card>
              </Link>


            </Grid>
          ))
        }
      </Grid>

    </div>
  )
}

