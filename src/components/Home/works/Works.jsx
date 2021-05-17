import React from 'react'
import { Container, Grid } from '@material-ui/core'
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import StorageIcon from '@material-ui/icons/Storage';
import CodeIcon from '@material-ui/icons/Code';
import RedditIcon from '@material-ui/icons/Reddit';
import './works.css'

function Works() {
    return (
        <div>
            <section className="works">
                <Container>
                    <h1 className="sectionTitle">What I Do</h1>
                    <Grid container>
                        <Grid item md={6}>
                            <div className="work">
                                <div className="icon"><ArtTrackIcon /></div>
                                <div>
                                    <h3>FrontEnd Design</h3>
                                    <p>I achieve expert level skills on Front end designing. I use the latest libraries and frameworks for building user interface.</p>
                                </div>
                            </div>
                            <div className="work">
                                <div className="icon"><StorageIcon /></div>
                                <div>
                                    <h3>BackEnd Development</h3>
                                    <p>As a lover of Javascript, I develop my application's server with NodeJs and ExpressJs. I create REST API and other staffs accross those.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="work">
                                <div className="icon"><CodeIcon /></div>
                                <div>
                                    <h3>Junior Software Engineer</h3>
                                    <p>Being a fast learner and hard worker, I always want to contribute to the growth of my company where I'll work and to make our customers happy. </p>
                                </div>
                            </div>
                            <div className="work">
                                <div className="icon"><RedditIcon /></div>
                                <div>
                                    <h3>ML and AI</h3>
                                    <p>I'll very happy if I have opportunity to contribute in different area in my company. Learning a new stack isn't very lengthy or harder for me.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}

export default Works
