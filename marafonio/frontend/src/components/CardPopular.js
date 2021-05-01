import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, Button } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Textfit } from 'react-textfit';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 15,
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
  },
  media: {
    width: '100%',
    paddingTop: "40%",
    height: 500,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardHeader:{
    fontSize: 48
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function CardPopular(props) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.root}>
        <Grid style = {{marginBottom: 20}} container row alignItems="center" item xs={12}>
          <Grid item container xs={8}>
            <Link>
              <Avatar  className={classes.large} style={{marginRight: 40}} alt={props.Name} src="../static/images/avatar.png" />
            </Link>
            <Typography variant="h3">{props.name ? props.name : "Name Surname"}</Typography>
          </Grid>
          <Grid container item justify="flex-end" xs={4}>
            <Link to="/Marafons/Marafon" className="btn" style={{fontSize:20}}>Учавствовать</Link>
          </Grid>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Box className = {classes.media} style= {{backgroundImage: `url(${props.backgroundImage})`}}>
          </Box>
        </Grid>
        <Grid container  justify="flex-start" direction="column" item sm={12} md={6} lg={6} style={{paddingLeft: 40}}>
          <Typography variant="h3" component="h2">{props.title ? props.title : "Title"}</Typography>
          <Typography variant="h5" component="p"> {props.desсription ? props.desсription : "Description"}</Typography>
        </Grid>
    </Grid>
  );
}