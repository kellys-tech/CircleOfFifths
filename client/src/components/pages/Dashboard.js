import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Keyboard from "../keyboard"
import TopAppBar from "../appbar/appbar.js";
import Flatscales from "../flatscales/index.js";
import Sharpscales from "../sharpscales/index.js";
import OrderofFlats from "../orderofflats/index.js";
import OrderofSharps from "../orderofsharps/index.js";
import Circle from "../circle/index.js";


const Dashboard = props => {
  return (
    <div>
      <TopAppBar/>
      <Container >
      <Grid container>
      <Grid item xs= {3}>
        </Grid>
      <Grid item xs= {6}>
        <Keyboard />
        </Grid>
        <Grid item xs= {3}>
        </Grid>
        <Grid item xs= {3}>
        <Flatscales />
        </Grid>
        <Grid item xs= {6}>
        <Circle />
        </Grid>
        <Grid item xs= {3}>
        <Sharpscales />
        </Grid>
        <Grid item xs= {3}>
        <OrderofFlats />
        </Grid>
        <Grid item xs= {6}>
        </Grid>
        <Grid item xs= {3}>
        <OrderofSharps />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;


