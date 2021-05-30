import React from 'react'
import { Container, Grid } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WatchIcon from '@material-ui/icons/Watch';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import './achieves.css'

function Achieves() {
    return (
        <section>
            <Container>
                    <h1 className="sectionTitle2">Fun Facts</h1>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="achieve">
                            <FavoriteBorderIcon />
                            <h4>Happy Clients</h4>
                            <h1>003</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="achieve">
                            <WatchIcon />
                            <h4>Working Hours</h4>
                            <h1>0,680</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="achieve">
                            <StarBorderIcon />
                            <h4>Awards Won</h4>
                            <h1>02</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="achieve">
                            <LocalCafeIcon />
                            <h4>Coffee Consumed</h4>
                            <h1>0,026</h1>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Achieves
