import { Container, Fab, Grid } from '@material-ui/core'
import Footer from '../Shared/footer/Footer'
import Navigation from '../Home/navigation/Navigation'
import classes from './portfolio.module.css'
import pic from '../../images/projects.png'
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
                    <Grid container>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={pic} alt="portfolio" />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum illum exercitationem modi ipsam sit pariatur, facere delectus ratione maiores voluptas veritatis expedita optio repellendus ipsa eum accusantium. Saepe, neque! <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident consequatur eum tempore dolorem quos ullam harum eius. Suscipit dicta eum ex nostrum dolor voluptas saepe iusto ducimus reprehenderit!
                                        <div style={{marginTop: '25px'}}><a href="/" className="myBtn">Go Live</a></div>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={pic} alt="portfolio" />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum illum exercitationem modi ipsam sit pariatur, facere delectus ratione maiores voluptas veritatis expedita optio repellendus ipsa eum accusantium. Saepe, neque! <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident consequatur eum tempore dolorem quos ullam harum eius. Suscipit dicta eum ex nostrum dolor voluptas saepe iusto ducimus reprehenderit!
                                        <div style={{marginTop: '25px'}}><a href="/" className="myBtn">Go Live</a></div>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={pic} alt="portfolio" />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum illum exercitationem modi ipsam sit pariatur, facere delectus ratione maiores voluptas veritatis expedita optio repellendus ipsa eum accusantium. Saepe, neque! <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident consequatur eum tempore dolorem quos ullam harum eius. Suscipit dicta eum ex nostrum dolor voluptas saepe iusto ducimus reprehenderit!
                                        <div style={{marginTop: '25px'}}><a href="/" className="myBtn">Go Live</a></div>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={pic} alt="portfolio" />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum illum exercitationem modi ipsam sit pariatur, facere delectus ratione maiores voluptas veritatis expedita optio repellendus ipsa eum accusantium. Saepe, neque! <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident consequatur eum tempore dolorem quos ullam harum eius. Suscipit dicta eum ex nostrum dolor voluptas saepe iusto ducimus reprehenderit!
                                        <div style={{marginTop: '25px'}}><a href="/" className="myBtn">Go Live</a></div>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <div className={classes.card}>
                                <img src={pic} alt="portfolio" />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum illum exercitationem modi ipsam sit pariatur, facere delectus ratione maiores voluptas veritatis expedita optio repellendus ipsa eum accusantium. Saepe, neque! <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident consequatur eum tempore dolorem quos ullam harum eius. Suscipit dicta eum ex nostrum dolor voluptas saepe iusto ducimus reprehenderit!
                                        <div style={{marginTop: '25px'}}><a href="/" className="myBtn">Go Live</a></div>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
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
