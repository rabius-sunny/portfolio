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
import Navigation from '../Home/navigation/Navigation'
import Footer from '../Shared/footer/Footer'
import ScrollTop from '../Shared/scrollToTop/ScrollToTop';
import js from '../../images/js.jpg'
import string from '../../images/string.jpeg'
import coreReact from '../../images/coreReact.jpg'
import truthy from '../../images/truthy.png'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '15px',
        background: '#ffffff0f',
        color: '#ffffff'

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
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
        backgroundColor: '#f50057',
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
                                        JS
                                </Avatar>
                                }
                                title="JS10 — Ten Javascript String methods you have to know"
                                subheader="May 5, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={string}
                                title="Js String"
                            />
                            <CardContent>
                                <Typography variant="body2" color="white" component="p">
                                    String is a basic data type of Javascript. It holds some data actually characters between two quotes, single or double. Between quotes, it holds characters one by one that’s why it is called ‘String’. We’ll discuss some useful methods and approaches used with string.
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="https://rabius-sunny.medium.com/js10-ten-javascript-string-methods-you-have-to-know-454b9b3a9702" target="_blank" rel="noreferrer">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        JS
                                </Avatar>
                                }
                                title="JS10 — Ten Javascript fundamental topics you should know"
                                subheader="May 6, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={js}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="white" component="p">
                                    Ten Javascript fundamental topics you should know. Cross Browser Testing: As a web developer, we build different applications that are used by world wide users. During our development process, we test our application across our devices. But it isn’t...
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="https://rabius-sunny.medium.com/js10-ten-javascript-fundamental-topics-you-should-know-2873d553053c" target="_blank" rel="noreferrer">Read more</a></Button>
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
                                title="JS10 — Core React and JSX"
                                subheader="May 7, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={coreReact}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="white" component="p">
                                    React is a Javascript Library :
                                    React isn’t a framework. A framework is usually a large concept that serves a great purpose. It contains many features and has many smart design decisions for developers. Frameworks are not flexible because they usually want us to code everything in a certain way...
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="https://rabius-sunny.medium.com/js10-core-react-and-jsx-c81e02ac59ca" target="_blank" rel="noreferrer">Read more</a></Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        JS
                                </Avatar>
                                }
                                title="JS10–Ten Tricky Javascript Facts We Need to Know for Interview"
                                subheader="May 8, 2021"
                            />
                            <CardMedia
                                className={classes.media}
                                image={truthy}
                                title="Js Dude"
                            />
                            <CardContent>
                                <Typography variant="body2" color="white" component="p">
                                    Truthy vs Falsy value : In javascript, when we do a boolean job, in other words, we expect a value from a boolean context, if the value is considered as true, so the value is a truthy value. All the values are truthy in javascript except which are mentioned as falsy. Simply any variable with a value is truthy...
                            </Typography>
                                <Button variant="contained" color="secondary" style={{ marginTop: '15px' }}><a href="https://rabius-sunny.medium.com/js10-ten-tricky-javascript-facts-we-need-to-know-for-interview-f3d54e6b7140" target="_blank" rel="noreferrer">Read more</a></Button>
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
