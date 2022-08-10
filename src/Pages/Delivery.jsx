import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  types: {
    backgroundImage:
      "url('https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/fooddeliveryinbrazil.jpg')",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  },
  heading: {
    paddingTop: "100px",
    fontWeight: "200px",
    paddingLeft: "60px",
    color: "red",
  },
  text: {
    paddingLeft: "60px",
  },
});

const Delivary = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.types}>
        <div className={classes.heading}>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            style={{ fontWeight: 800 }}
          >
            DELIVARY
          </Typography>
        </div>
        <div className={classes.text}>
          <Typography variant="h5" gutterBottom component="div">
            Lorem ipsum dolor sit amet agjk vjjkm, <br />
            consectetur, adipisicing
            <br />
            elit.
          </Typography>
          <Button variant="contained" size="medium">
            Read More
          </Button>
        </div>
        <div style={{ paddingLeft: "150px" }}></div>
      </Box>
    </>
  );
};

export default Delivary;
