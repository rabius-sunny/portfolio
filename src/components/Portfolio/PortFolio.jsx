import { Container, Fab, Grid } from '@material-ui/core'
import Footer from '../Shared/footer/Footer'
import Navigation from '../Home/navigation/Navigation'
import classes from '../Home/projects/projects.module.css'
import car from '../../images/car.png'
import dental from '../../images/dental.png'
import mart from '../../images/mart.png'
import app from '../../images/apps.png'
import buddies from '../../images/social-buddies.png'
import quranproject from '../../images/quranproject.png'
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../Shared/scrollToTop/ScrollToTop'

function PortFolio(props) {
    return (
        <div>
            <Navigation />
            <div className="heading">
                <h1 className="header__name">Portfolio</h1>
            </div>
            <section>
                <Container>
                    <h1 className="sectionTitle">Projects</h1>
                    <Grid container>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={car} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="https://car-garden.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                        <li><a href="https://github.com/rabius-sunny/car-garden" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                        <li><a href="https://github.com/rabius-sunny/car-garden-server" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>Car Garden</h2>
                                <p className={classes.cardInfo}>Full Stack complete web application with CRUD features, Authentication and Payment integration,
                            made with React, React-Router, React-Hook-form, Bootstrap, React-Spring, stipe and Axios.Deployed at Firebase and Heroku.</p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={dental} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="http://tanjim-dental.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                        <li><a href="https://github.com/rabius-sunny/dentist-appointment" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                        <li><a href="https://github.com/rabius-sunny/dentist-server" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>Tanjim Dental Care</h2>
                                <p className={classes.cardInfo}>Full Featured complete web application for Dental appointment and checkup made with React, React-Router, React-Hook-form and Bootstrap. Client and Server are deployed at Firebase and Heroku.</p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={mart} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="http://the-oceanmart.web.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                        <li><a href="https://github.com/rabius-sunny/re-commerce-frontend" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                        <li><a href="https://github.com/rabius-sunny/re-commerce-backend" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>The Ocean Mart</h2>
                                <p className={classes.cardInfo}>Full Featured Ecommerce application with Authentication and  Payment integration made with React, React-Router, React-Hook-form, Bootstrap, Stripe and Axios. Client and Server are deployed at Firebase and Heroku.</p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={app} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="https://github.com/rabius-sunny/bootz-gallery-react-native" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                        <li><a href="https://github.com/rabius-sunny/bootz-gallery-react-native" target="_blank" rel="noreferrer"> <GitHubIcon /> server</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>Bootz Gallery React Native</h2>
                                <p className={classes.cardInfo}>Full Featured Ecommerce application with Authentication and  Payment integration made with React, React-Router, React-Hook-form, Bootstrap, Stripe and Axios. Client and Server are deployed at Firebase and Heroku.</p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={buddies} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="https://buddy-blog.netlify.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                        <li><a href="https://github.com/rabius-sunny/social-buddy" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>Social Buddies</h2>
                                <p className={classes.cardInfo}>Full-stack dynamic social blogging application developed with ReactJs and Bootstrap5. JSON Placeholder used for dummy users, posts and comments. Pagination added for posts and in user list. Sorting, Searching also added in the user list section. </p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={quranproject} alt="project" />
                                <div className={classes.linkBtn} style={{ display: 'block', position: 'static', marginTop: '10px' }}>
                                    <ul>
                                        <li><a href="https://quranproject.netlify.app/" target="_blank" rel="noreferrer"> <LinkIcon /> live</a></li>
                                        <li><a href="https://github.com/rabius-sunny/QuranProject" target="_blank" rel="noreferrer"> <GitHubIcon /> client</a></li>
                                    </ul>
                                </div>
                                <h2 style={{ fontWeight: 'bold', padding: '10px 0 0 10px', color: 'white' }}>Quran Project</h2>
                                <p className={classes.cardInfo}>A dynamic web application build for Reading and Listening The Holy Quran.</p>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}><a href="https://github.com/rabius-sunny" target="_blank" rel="noreferrer" className="globalBtn__primary">See more</a></div>
                </Container>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </section>
            <Footer />
        </div>
    )
}

export default PortFolio
