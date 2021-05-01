import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardPopular from './CardPopular';
import axios from 'axios';
import CardSmall from './CardSmall';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    categoryTitle:{
        fontWeight: "bold",
        marginBottom: 20
    },
  }));

function Marafons(props)
{
    const [data, setData] = useState([])
    const classes = useStyles();
    useEffect(async () => {
        const result = await axios.get('api/marafon')
        setData(result.data)
    }, [])
    console.log(data)
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        
        <Container maxWidth="lg">
            <Grid container direction="column">
                <Typography className={classes.categoryTitle} variant="h2" component="h1">Популярные</Typography>
                <Grid item xs={12} style={{paddingTop: 40, paddingBottom: 40}}>
                    <Carousel autoPlay={false}>
                        {
                            data.map( (item, i) => <CardPopular key={i} 
                            desсription={item['description']}
                            title={item['title']} 
                            name="Алдияр Малик" 
                            backgroundImage="http://prod-upp-image-read.ft.com/5ecccf40-b7e5-11e9-96bd-8e884d3ea203"/> )
                        }
                    </Carousel>
                </Grid>
                <Typography className={classes.categoryTitle} variant="h2" component="h1">По Категориям</Typography>
                <Grid container item xs={12} direction="row" spacing={3}>
                
                        <Grid item xs={6}>
                            <Typography className={classes.categoryTitle} variant="h4" component="h2">Хобби</Typography>
                            <Carousel autoPlay={false}>
                                {
                                    items.map( (item, i) => 
                                    <CardSmall 
                                    key={i}
                                    title="Test Title"
                                    image="http://prod-upp-image-read.ft.com/5ecccf40-b7e5-11e9-96bd-8e884d3ea203"
                                    description="test desc test desc test desc test desc test desc test desc "
                                    imageTitle="test image title"

                                    /> )
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.categoryTitle} variant="h4" component="h2">Бизнес</Typography>
                            <Carousel autoPlay={false}>
                                {
                                    items.map( (item, i) => 
                                    <CardSmall 
                                    key={i}
                                    title="Test Title"
                                    image="http://prod-upp-image-read.ft.com/5ecccf40-b7e5-11e9-96bd-8e884d3ea203"
                                    description="test desc test desc test desc test desc test desc test desc "
                                    imageTitle="test image title"

                                    /> )
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.categoryTitle} variant="h4" component="h2">Саморазвитие</Typography>
                            <Carousel autoPlay={false}>
                                {
                                    items.map( (item, i) => 
                                    <CardSmall 
                                    key={i}
                                    title="Test Title"
                                    image="http://prod-upp-image-read.ft.com/5ecccf40-b7e5-11e9-96bd-8e884d3ea203"
                                    description="test desc test desc test desc test desc test desc test desc "
                                    imageTitle="test image title"

                                    /> )
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.categoryTitle} variant="h4" component="h2">Учеба</Typography>
                            <Carousel autoPlay={false}>
                                {
                                    items.map( (item, i) => 
                                    <CardSmall 
                                    key={i}
                                    title="Test Title"
                                    image="http://prod-upp-image-read.ft.com/5ecccf40-b7e5-11e9-96bd-8e884d3ea203"
                                    description="test desc test desc test desc test desc test desc test desc "
                                    imageTitle="test image title"

                                    /> )
                                }
                            </Carousel>
                        </Grid>
                </Grid>
                <Typography className={classes.categoryTitle} variant="h3" component="h1">Найдите то что интересует Вас!</Typography>
                
            </Grid>
        </Container>
       
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Marafons;