import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
   },
   input: {
    height: 300
  },
  titleInput: {
      fontSize: 72,
  },
  titleInputLabel:{
    color: "#040707",
    fontSize: 46
  },
  descInput:{
      fontSize: 32,
      lineHeight: "1em"
  }
  }));

export default function MarafonAdd(props){
    const classes = useStyles();
    return(
        <Container>
            <TextField 
            id="standard-basic" 
            label="Заголовок"
            InputProps={{
                classes: {
                  input: classes.titleInput
                },
              }}
              InputLabelProps={{
                  classes:{
                      root: classes.titleInputLabel,
                  },
              }} />
            <Grid container 
            direction="column" 
            justify="center"
            alignItems="center">
                <Grid className={classes.image} item xs={12}>
                    
                </Grid>
                <Grid alignItems="flex-start" item container >
                    <TextField
                    className = {classes.input}
                    id="standard-basic" 
                    label="Описание"
                    InputProps={{
                        classes: {
                        input: classes.descInput
                        },
                    }}
                    InputLabelProps={{
                        classes:{
                            root: classes.titleInputLabel,
                        },
                    }} 
                    multiline
                    fullWidth={true} />
                </Grid>
                <Grid alignItems="flex-start" item container>
                    <TextField
                        className = {classes.input}
                        id="standard-basic" 
                        label="Описание"
                        InputProps={{
                            classes: {
                            input: classes.descInput
                            },
                        }}
                        InputLabelProps={{
                            classes:{
                                root: classes.titleInputLabel,
                            },
                        }} 
                        multiline
                        fullWidth={true} />
                </Grid>
                <Grid alignItems="flex-start" item container>
                    <Typography  variant="h3" component="h2">
                        Материалы
                    </Typography>

                </Grid>
            </Grid>
        </Container>
    )
}