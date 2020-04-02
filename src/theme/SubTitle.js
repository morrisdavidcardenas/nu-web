import React, { Fragment } from 'react'; 
import { Grid, Typography } from '@material-ui/core';
import { Line } from './Line';
export const SubTitle = (props) => (
  <Fragment>
    <Line />
    <Grid
      container
      spacing={2}
      style={{ paddingTop: '28px' }}
    >
      <Grid
        item
        xs={12}
      >
        <Typography variant="h3">{props.title}</Typography>
      </Grid>
    </Grid>
  </Fragment>
);
