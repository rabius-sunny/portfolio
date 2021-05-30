import { Container, Grid } from "@material-ui/core"
import { Link } from "react-router-dom"
import car from '../../../images/car.png'
import dental from '../../../images/dental.png'
import mart from '../../../images/mart.png'
import classes from './projects.module.css'
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
    return (
        <section>
            <Container>
                <h1 className="sectionTitle">Projects</h1>
                <Grid container>
                    <Grid item md={4} sm={12} xs={12}>
                        <div className={classes.card}>
                            <img src={car} alt="project" />
                            <div className={classes.linkBtn}>
                                <ul>
                                    <li><a href="https://car-garden.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                    <li><a href="https://github.com/rabius-sunny/car-garden" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                    <li><a href="https://github.com/rabius-sunny/car-garden-server" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                </ul>
                            </div>
                            <p className={classes.cardInfo}>Full Stack complete web application with CRUD features, Authentication and Payment integration,
                            made with React, React-Router, React-Hook-form, Bootstrap, React-Spring, stipe and Axios.Deployed at Firebase and Heroku.</p>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <div className={classes.card}>
                            <img src={dental} alt="project" />
                            <div className={classes.linkBtn}>
                                <ul>
                                    <li><a href="http://tanjim-dental.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                    <li><a href="https://github.com/rabius-sunny/dentist-appointment" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                    <li><a href="https://github.com/rabius-sunny/dentist-server" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                </ul>
                            </div>
                            <p className={classes.cardInfo}>Full Featured complete web application for Dental appointment and checkup made with React, React-Router, React-Hook-form and Bootstrap. Client and Server are deployed at Firebase and Heroku.</p>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <div className={classes.card}>
                            <img src={mart} alt="project" />
                            <div className={classes.linkBtn}>
                                <ul>
                                    <li><a href="http://the-oceanmart.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                    <li><a href="https://github.com/rabius-sunny/re-commerce-frontend" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                    <li><a href="https://github.com/rabius-sunny/re-commerce-backend" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                </ul>
                            </div>
                            <p className={classes.cardInfo}>Full Featured Ecommerce application with Authentication and  Payment integration made with React, React-Router, React-Hook-form, Bootstrap, Stripe and Axios. Client and Server are deployed at Firebase and Heroku.</p>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ textAlign: 'center' }}><Link to="/portfolio" className="globalBtn__primary">See more</Link></div>
            </Container>
        </section>
    )
}

export default Projects
