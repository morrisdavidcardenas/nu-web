import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress, {CircularProgressProps} from '@material-ui/core/CircularProgress'; 

const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
    marginRight: '10px',
    marginBottom: '-8px'
  },
  top: {
    color: '#eef3fd',
  },
  bottom: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
});

export function LoadingInline(props: CircularProgressProps) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={24}
        thickness={4}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
        {...props}
      />
    </div>
  );
}