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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit dolore non quos eaque laboriosam, alias tempora perspiciatis nisi error sed laudantium vitae pariatur maxime velit quas hic, ducimus consectetur?</p>
                                </div>
                            </div>
                            <div className="work">
                                <div className="icon"><StorageIcon /></div>
                                <div>
                                    <h3>BackEnd Development</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit dolore non quos eaque laboriosam, alias tempora perspiciatis nisi error sed laudantium vitae pariatur maxime velit quas hic, ducimus consectetur?</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="work">
                                <div className="icon"><CodeIcon /></div>
                                <div>
                                    <h3>Junior Software Engineer</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit dolore non quos eaque laboriosam, alias tempora perspiciatis nisi error sed laudantium vitae pariatur maxime velit quas hic, ducimus consectetur?</p>
                                </div>
                            </div>
                            <div className="work">
                                <div className="icon"><RedditIcon /></div>
                                <div>
                                    <h3>ML and AI</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit dolore non quos eaque laboriosam, alias tempora perspiciatis nisi error sed laudantium vitae pariatur maxime velit quas hic, ducimus consectetur?</p>
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
