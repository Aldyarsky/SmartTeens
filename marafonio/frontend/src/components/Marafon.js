import { Container, FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MarafonAdd from './MarafonAdd';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   image:{
        width: '100%',
        paddingTop: "60%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
   },
   title:{
       textAlign: "left",
   }
  }));

export default function Marafon(props){
    const classes = useStyles();
    return(
        <Container>
            <Typography variant="h1" component="h1">
                Title
            </Typography>
            <Grid container 
            direction="column" 
            justify="center"
            alignItems="center">
                <Grid className={classes.image} item xs={12}>
                    
                </Grid>
                <Grid alignItems="flex-start" item container    >
                    <Typography  variant="h3" component="h2">
                        Описание
                    </Typography>
                    <Typography>

                    </Typography>
                </Grid>
                <Grid alignItems="flex-start" item container>
                    <Typography  variant="h3" component="h2">
                        Чему вы научитесь
                    </Typography>
                    <Typography>

                    </Typography>
                </Grid>
                <Grid alignItems="flex-start" item container>
                    <Typography  variant="h3" component="h2">
                        Материалы
                    </Typography>

                </Grid>
            </Grid>
            <MarafonAdd></MarafonAdd>
        </Container>
    )
}