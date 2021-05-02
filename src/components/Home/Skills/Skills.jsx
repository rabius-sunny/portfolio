import classes from "./skills.module.css"
import { Container, Grid } from "@material-ui/core"

const Skills = () => {
    return (
        <section>
            <Container>
                <h1 className="sectionTitle">Professional Skills</h1>
                <Grid container>
                    <Grid item md={6}>
                        <div className="work">
                            <div>
                                <h3>FrontEnd Development</h3>
                                <p>For Front end design and development, I use the latest Front end technologies.</p> 
                                <div className={classes.skills}>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>Javascript</p>
                                    <p>React Js</p>
                                    <p>SASS</p>
                                    <p>Material UI</p>
                                    <p>Tailwind CSS</p>
                                    <p>Bootstrap5</p>
                                    <p>ReactBootstrap</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="work">
                            <div>
                                <h3>BakeEnd Development</h3>
                                <p>In Back end architect and development, I use the latest technologies from Javascript and ES6 .</p> 
                                <div className={classes.skills}>
                                    <p>Javascript</p>
                                    <p>ES6</p>
                                    <p>Node Js</p>
                                    <p>Express Js</p>
                                    <p>Mongo DB</p>
                                    <p>Firebase</p>
                                    <p>Fire Auth</p>
                                    <p>Netlify</p>
                                    <p>Heroku</p>
                                    <p>JWT</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="work">
                            <div>
                                <h3>Familiarity</h3>
                                <p>I'm also available at some other languages and library/frameworks</p> 
                                <div className={classes.skills}>
                                    <p>React Native</p>
                                    <p>Typescript</p>
                                    <p>Php</p>
                                    <p>Next Js</p>
                                    <p>Electron Js</p>
                                    <p>Python</p>
                                    <p>OOP</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="work">
                            <div>
                                <h3>Utility Packages</h3>
                                <p>To make the job easy, I use different professional tools and packages. </p> 
                                <div className={classes.skills}>
                                    <p>React-Router</p>
                                    <p>Redux</p>
                                    <p>Hooks</p>
                                    <p>Context</p>
                                    <p>React-Chart</p>
                                    <p>d3</p>
                                    <p>Axios</p>
                                    <p>React-Hook-Form</p>
                                    <p>React-Reveal</p>
                                    <p>React-Spring</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="work">
                            <div>
                                <h3>Productivity Tools</h3>
                                <p>To keep my Development Operation continues and smooth, I prefer some productivity tools.</p>
                                <div className={classes.skills}>
                                    <p>Git</p>
                                    <p>Github</p>
                                    <p>VS Code</p>
                                    <p>Sublime</p>
                                    <p>Docker</p>
                                    <p>Chrome Dev-Tool</p>
                                    <p>npm</p>
                                    <p>yarn</p>
                                    <p>bash</p>
                                    <p>zsh</p>
                                    <p>Figma</p>
                                    <p>JIRA</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Skills
