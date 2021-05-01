import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: 345,
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: '20px'
  },
  icon:{
    fontSize: '50px'
  }
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Typography className={classes.title} variant="h4" component="h4">
                    Свяжитесь с нами
                </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
                      <Link className={classes.title}  underline="false" href="http://instagram.com">
                        <InstagramIcon className={classes.icon}></InstagramIcon>
                      </Link>
                      <Link className={classes.title} href="http://instagram.com">
                        <YouTubeIcon className={classes.icon}></YouTubeIcon>
                      </Link>
                      <Link className={classes.title}  href="http://instagram.com">
                        <FacebookIcon className={classes.icon}></FacebookIcon>
                      </Link>
                    </Box>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={3}>
                <Box display="flex" flexDirection="column" marginBottom={20}>
                  <Typography className={classes.title}  variant="h5">Про нас</Typography>
                  <Link className={classes.title}  underline="none" href="#">Адрес</Link>
                  <Link className={classes.title}  underline="none" href="#">О нас</Link>
                  <Link className={classes.title}  underline="none" href="#">Брэнд</Link>
                  <Link className={classes.title}  underline="none" href="#">Создатели</Link>
                </Box>
              </Grid>
              <Grid item xs={3}>
                  <Box display="flex" flexDirection="column" marginBottom={20}>
                    <Typography className={classes.title} variant="h5">Про нас</Typography>
                    <Link className={classes.title}  underline="none" href="#">Адрес</Link>
                    <Link className={classes.title}  underline="none" href="#">О нас</Link>
                    <Link className={classes.title}  underline="none" href="#">Брэнд</Link>
                    <Link className={classes.title}  underline="none" href="#">Создатели</Link>
                  </Box>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" flexDirection="column" marginBottom={20}>
                  <Typography className={classes.title} variant="h5">Про нас</Typography>
                  <Link className={classes.title}  underline="none" href="#">Адрес</Link>
                  <Link className={classes.title}  underline="none" href="#">О нас</Link>
                  <Link className={classes.title}  underline="none" href="#">Брэнд</Link>
                  <Link className={classes.title}  underline="none" href="#">Создатели</Link>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" flexDirection="column" marginBottom={20}>
                  <Typography className={classes.title} variant="h5">Про нас</Typography>
                  <Link className={classes.title}  underline="none" href="#">Адрес</Link>
                  <Link className={classes.title}  underline="none" href="#">О нас</Link>
                  <Link className={classes.title} underline="none" href="#">Брэнд</Link>
                  <Link className={classes.title}  underline="none" href="#">Создатели</Link>
                </Box>
              </Grid>
            </Grid>
        </Grid>
    </Container>
  );
}