import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import TopAppBar from "../appbar/appbar.js";
// import Keyboard from "../keyboard/index.js";
import Flatscales from "../flatscales/index.js";
import Sharpscales from "../sharpscales/index.js";
import OrderofFlats from "../orderofflats/index.js";
import OrderofSharps from "../orderofsharps/index.js";
import Circle from "../circle/index.js";
import { Grid } from '@material-ui/core';

import API from '../../utils/apiHelper';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div>
      <TopAppBar/>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Grid item xs= {3}>
          <Flatscales />
          </Grid>
          <Grid item xs= {6}>
          <Circle />
          </Grid>
          <Grid item xs= {3}>
          <Sharpscales />
          </Grid>

    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Signed in as </b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              {/* <Keyboard/> */}
            </p>
            
            
            <OrderofFlats />
            <OrderofSharps />
          </h4>

          <button
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }
            }
            onClick={onLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
    </Grid>
    </div>
  );
};

export default Dashboard;
