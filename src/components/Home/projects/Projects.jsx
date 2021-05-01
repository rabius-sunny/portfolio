import { Container, Grid } from "@material-ui/core"
import { Link } from "react-router-dom"
import project from '../../../images/projects.png'
import classes from './projects.module.css'

const Projects = () => {
    return (
        <section>
            <Container>
                <h1 className="sectionTitle">Projects</h1>
                <Grid container>
                    <Grid item md={4} sm={6} xs={12}>
                        <div className={classes.card}>
                            <img src={project} alt="project" />
                            <p className={classes.cardInfo}>Full Stack complete web application with CRUD features, Authentication and Payment integration,
                            made with React, React-Router, React-Hook-form, Bootstrap, React-Spring stipe and Axios.Deployed at Firebase and Heroku. Click to Visit.</p>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <div className={classes.card}>
                            <img src={project} alt="project" />
                            <p className={classes.cardInfo}>Full Stack complete web application with CRUD features, Authentication and Payment integration,
                            made with React, React-Router, React-Hook-form, Bootstrap, React-Spring stipe and Axios.Deployed at Firebase and Heroku. Click to Visit.</p>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <div className={classes.card}>
                            <img src={project} alt="project" />
                            <p className={classes.cardInfo}>Full Stack complete web application with CRUD features, Authentication and Payment integration,
                            made with React, React-Router, React-Hook-form, Bootstrap, React-Spring stipe and Axios.Deployed at Firebase and Heroku. Click to Visit.</p>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ textAlign: 'center' }}><Link to="/portfolio" className="globalBtn__primary">See more</Link></div>
            </Container>
        </section>
    )
}

export default Projects
