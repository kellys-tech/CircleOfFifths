import React from 'react';
import { Grid } from '@material-ui/core';
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
      <Grid container>
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
    </div>
  );
};

export default Dashboard;


