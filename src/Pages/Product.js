import { AppBar, IconButton, Toolbar, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Paper } from '@material-ui/core'
import React from 'react'
import { Menu, ShoppingCart, Star, StarBorderOutlined } from '@material-ui/icons'



const data = [
  {
    name: 'Restaurant - 1',
    food: 'Chicken Fried Rice',
    img: '/images/Chicken-Fried-Rice-wide-FS-.jpg',
    star: <IconButton aria-label="add to favorites"><Star /><Star /><Star /><StarBorderOutlined /><StarBorderOutlined /></IconButton>
  },
  {
    name: 'Restaurant - 2',
    food: 'Chicken Fried Rice',
    img: '/images/Chicken-Fried-Rice-wide-FS-.jpg',
    star: <IconButton aria-label="add to favorites"><Star /><Star /><Star /><StarBorderOutlined /><StarBorderOutlined /></IconButton>

  },
  {
    name: 'Restaurant - 3',
    food: 'Chicken Fried Rice',
    img: '/images/Chicken-Fried-Rice-wide-FS-.jpg',
    star: <IconButton aria-label="add to favorites"><Star /><Star /><Star /><Star /><Star /></IconButton>

  },
  {
    name: 'Restaurant - 4',
    food: 'Chicken Fried Rice',
    img: '/images/Chicken-Fried-Rice-wide-FS-.jpg',
    star: <IconButton aria-label="add to favorites"><Star /><StarBorderOutlined /><StarBorderOutlined /><StarBorderOutlined /><StarBorderOutlined /></IconButton>

  }
]

export default function Product() {
  return (
    <div>
      {/* <h1>hello</h1> */}
      <AppBar position="sticky" style={{ backgroundColor: "#FFA500" }}>
        <Toolbar>
          <div>
            <IconButton
              color="inherit"
              aria-label="app">
              <Menu />
            </IconButton>
          </div>
          


          <Typography variant="h6" >
            FoodApp
          </Typography>

          <IconButton style={{ marginLeft: "auto" }} size="large"
            color="inherit"
            aria-label="menu"
          >
            <ShoppingCart />
          </IconButton>
        </Toolbar>


      </AppBar>
      <Paper elevation={4} style={{ height: "100px" }}>
        <Typography variant='h4' style={{ textAlign: "center" }}>Address</Typography>
      </Paper>
      <Grid container spacing={3} style={{ marginTop: "20px" }} >
        {
          data.map((data) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Card className='d-flex justify-content-around' >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={data.img}
                    alt="Image"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.food}
                    </Typography>
                    {data.star}
                  </CardContent>
                </CardActionArea>
              </Card>

            </Grid>
          ))
        }
      </Grid>

    </div>
  )
}

