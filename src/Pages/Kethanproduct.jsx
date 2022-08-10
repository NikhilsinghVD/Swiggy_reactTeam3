import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { width } from '@mui/system';
import "./Productinfo.css";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
}));

export default function Productinfo() {
    return (
        <Box sx={{ flexGrow: 1, padding: "3rem" }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Button size="medium" >
                        <div className='button'> <b> X </b></div>
                    </Button>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h6" align='center' component="h2">
                        <b>PRODUCT INFO</b>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                    <CardMedia
                        component="img"
                        alt="BigCo Inc. logo"
                        height={"100%"}
                        width={'100%'}
                        image="https://images.moneycontrol.com/static-mcnews/2021/10/Mirrors-play-a-standout-role-in-accentuating-the-expansive-feel-of-Klap-2.jpg?impolicy=website&width=1600&height=900"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <div style={{ display: "inline" }}>
                        <Typography variant="body1" gutterBottom>
                            Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                            It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                            <div />
                            Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                            It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.
                        </Typography>
                        <Button size="medium">
                            -
                        </Button>
                        <p className='text'>1</p>
                        <Button size="medium">
                            +
                        </Button>
                        <p className='text'>$100</p>
                    </div>

                    <Button variant="contained" sx={{ ml: "279px" }}>Add to card</Button>

                </Grid>
            </Grid>
        </Box>
    );
}
