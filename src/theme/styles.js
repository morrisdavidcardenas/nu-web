export function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    center: {
      textAlign: 'center',
      margin: '0px auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width: '100%',
      marginTop: '30px',
      paddingBottom: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    MUIDataTable:{ 
      boxShadow: 'none!important',
    },
    containerSection: {
      padding: theme.spacing(2)
    }, 
    paperList: { 
      textAlign: 'center',
      width: '100%',
      marginTop: '30px',
      color: theme.palette.text.secondary
    },
    containerMain: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4)
    },
    title: {
      width: '100%',
      marginTop: 0
    },
    paperInProcess: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    button: {
      width: '60%'
    },
    borderBottom: {
      borderBottom: '1px solid #E1E1E1'
    },
    buttonNotMargin: {
      margin: '0px!important'
    },
    formControl: {
      margin: theme.spacing(1)
    },
    textField: {
      width: '100%',
    },
    select: {
      width: '100%'
    },
    select8: {
      width: '100%'
    },
    buttonLess: {
      marginLeft: theme.spacing(1) + 'px!important',
      marginTop: '7px!important',
      marginBottom: theme.spacing(2) + 'px!important'
    },
    buttonDelete: {
      backgroundColor: 'red',
      marginTop: '7px!important'
    },
    buttonRemove: {
      marginLeft: theme.spacing(2) + 'px!important',
    },
    hidden: {
      display: 'none!important'
    },
    titlePage: { 
      position: 'relative',
    },
    subTitlePage: {
      position: 'relative',
      marginLeft: '30px',
      marginTop: '8px',
    },
    iconPage: { 
      fontSize: '25px', 
      position: 'absolute',
      marginTop: '-2px',
      marginLeft: '-30px',
    },
    gridTitle: {
      backgroundColor: '#E1E1E1',
      marginTop: theme.spacing(-2),
      marginLeft: theme.spacing(-2),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: 'calc(100% + 32px)'
    },
    gridTitleButton: {
      paddingBottom: theme.spacing(0)
    },
    rowHover: {
      paddingTop: '8px', 
      marginLeft: theme.spacing(-2),
      paddingLeft: theme.spacing(2),
      width: 'calc(100% + 32px)',
      '&:nth-child(even)': { background: '#f7f7f7' },
      '&:nth-child(odd)': { background: '#FFF' },
      '&:hover': { backgroundColor: '#e6fafa' }
    }, 
    delete: {
      color: 'rgb(221, 51, 51)',
      borderColor: 'rgba(221, 51, 51,.5)',
      '&:hover > .MuiTouchRipple-root': {
        backgroundColor:  'rgba(221, 51, 51,.1)',
      },
    },
    editInline: {
      marginRight: '4px',
      display: 'inline-block',
    },
    editInlineButton: {
      margin: '0px!important',
      marginTop:'-6px!important',
    },
    editInlineSelect: {
      margin: '0px!important',
      marginTop:'-6px!important',
    },
    loading: {
      marginTop: theme.spacing(4),
    },
    loadingHeader: {
      marginTop: '0!important',
      position: 'absolute!important',
      marginLeft: '10px!important'
    },
    mb0: {
      marginBottom: '0px!important',
    },
    pb1: {
      paddingBottom: theme.spacing(1)+'px!important',
    },
    [theme.breakpoints.down('md')]: {
      rowFilter: {
        width: '100%!important'
      }
    },
  };
}
