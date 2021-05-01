import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

function HomePage(props){
    return(
        <div id="mainpage">
            <section className="mainpage-section" id="start-browsing">
                <Container maxWidth="lg" >
                    <div className="flex flex-column align-items-center white-text">
                        <Typography variant="h1" component="h1" align="center">Позновать по новому</Typography>
                        <Typography variant="p" align="center" component="p" paragraph={true}>Phasellus elit lectus, aliquam id feugiat a, lobortis a mauris. 
                            Donec ullamcorper viverra ornare. Nulla porta quis eros ut blandit.
                             Nulla facilisi. Praesent interdum, nunc in eleifend porttitor,
                              elit odio congue justo, eu sagittis purus nisl ac massa. Sed tristique urna in est volutpat dictum. Integer id accumsan tellus,
                             eget vestibulum odio. Ut at dolor non urna vestibulum vulputate quis ac dui.</Typography>
                        <Link className="btn" to="/Marafons">Учавствовать в Марафоне!</Link>
                    </div>
                </Container>
            </section>
            <section className="mainpage-section left-section" id="start-creating">
                <Container maxWidth="lg">
                    <Grid container direction="row" spacing={0}>
                        <Grid item lg={6} md ={6} sm={0}></Grid>
                        <Grid item lg={6} md={6} sm={12}> 
                            <div className="flex flex-column align-items-center black-text">
                                <Typography variant="h2" component="h2" align="right" paragraph={true}>Создайвайте аккаунт и начните делиться! </Typography>
                                <Typography variant="p" component="p" align="right" paragraph={true}>Phasellus elit lectus, aliquam id feugiat a, lobortis a mauris. 
                                    Donec ullamcorper viverra ornare. Nulla porta quis eros ut blandit.
                                    Nulla facilisi. Praesent interdum, nunc in eleifend porttitor</Typography>
                                <Link className="btn" to="/SignUp">Создать аккаут!</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}
export default HomePage;