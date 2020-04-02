import React from 'react';
import { styles } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => (styles(theme)));

export function Loading(props) {
  const classes = useStyles();
  const { className } = props;
  return (<CircularProgress color="secondary" className={classes.loading+' '+className} />);
}
