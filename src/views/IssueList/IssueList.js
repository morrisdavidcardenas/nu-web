/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getIssueList } from './actions';
import { issueListResults, isIssueListLoading } from './selectors';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/styles';
import { Loading } from '../../theme/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(theme => (styles(theme)));

export default function IssueList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const issueList = useSelector(state => issueListResults(state));
  const isLoading = useSelector(state => isIssueListLoading(state));

  useEffect(() => {
    dispatch(getIssueList());
  }, [dispatch]);

  const columns = [
    {
      name: 'title',
      label: 'Title',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: 'url',
      label: 'Url',
      options: {
        filter: true,
        sort: true,
      }
    },    
    {
      name: 'labelList',
      label: 'Labels',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (_value) => {
          return (
            <div>{ReactHtmlParser(_value.join('<br />'))}</div>
          );
        }
      },
    },
    {
      name: 'user.login',
      label: 'User',
      options: {
        filter: true,
        sort: true,
      }
    }    
  ];

  const options = {
    responsive: 'stacked',
    selectableRows: 'none',
  };

  function getData(issueList) {
    if (issueList) {
      issueList.forEach(issue => {
        let labelArray = [];
        issue.labels.forEach(label => {
          labelArray.push(label.name);
        });
        issue.labelList = labelArray;
      });
      return issueList;
    }
  }  

  return (
    <Grid
      className={(classes.root, classes.containerMain)}
      container
    >
      <Grid container>
        <Grid
          item
          style={{ textAlign: 'left' }}
          xs={12}
        >
          <Typography
            className={classes.titlePage}
            variant="h1"
          >Facebook Issues</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary">List of Facebook Issues</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container>
        {isLoading ?
          <Loading /> :
          <Paper
            className={classes.paperList}
            style={{ textAlign: 'left' }}
          >
            <MUIDataTable            
              className={classes.MUIDataTable + ' MUIDataTableList'}
              columns={columns}
              data={getData(issueList)}
              options={options}
            />
          </Paper>
        }
      </Grid>
    </Grid >
  );
}

