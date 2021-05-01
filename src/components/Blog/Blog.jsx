import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Container, Fab, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import pic from '../../images/thumbnail.png'
import Navigation from '../Home/navigation/Navigation'
import Footer from '../Shared/footer/Footer'
import ScrollTop from '../Shared/scrollToTop/ScrollToTop';

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        margin: '15px',
        background: '#00d6d6',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    avatar: {
        backgroundColor: 'blue',
    },
}));

export default function Blog(props) {
    const classes = useStyles();

    return (
        <>
            <Navigation />
            <Container>
                <Grid container>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        RE
                                </Avatar>
                                }
                                title="Introducing React Js"
                                subheader="March 14, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={pic}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit similique magnam. Alias aliquid in quo, blanditiis molestiae iste! Illum.
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="/">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        RE
                                </Avatar>
                                }
                                title="Introducing React Js"
                                subheader="March 14, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={pic}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit similique magnam. Alias aliquid in quo, blanditiis molestiae iste! Illum.
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="/">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        RE
                                </Avatar>
                                }
                                title="Introducing React Js"
                                subheader="March 14, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={pic}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit similique magnam. Alias aliquid in quo, blanditiis molestiae iste! Illum.
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="/">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        RE
                                </Avatar>
                                }
                                title="Introducing React Js"
                                subheader="March 14, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={pic}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit similique magnam. Alias aliquid in quo, blanditiis molestiae iste! Illum.
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="/">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <Footer />
        </>
    );
}
