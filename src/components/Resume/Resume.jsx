import Typical from 'react-typical'
import { Link } from 'react-router-dom'
import logo from '../../images/propicc.jpg'
import classes from './resume.module.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Footer from '../Shared/footer/Footer'
import { Container, Grid } from '@material-ui/core'

const Resume = () => {
  return (
    <main className={classes.resume}>
      <div
        className='heading'
        style={{ textAlign: 'center', borderRadius: '25px 25px 0 0' }}
      >
        <h1 className='header__name'>
          <Link to='/'>Rabius Sunny</Link>
        </h1>
      </div>
      <div className={classes.bg}>
        <Container className={classes.typical}>
          <img src={logo} width='100px' alt='logo' />
          <h1>I'm Rabius Sunny</h1>
          <p>
            <Typical
              steps={[
                'Front end designer',
                2000,
                'Back end developer',
                2000,
                'Junior Full-stack developer',
                2000,
                'Writer',
                2000
              ]}
              loop={Infinity}
            />
          </p>
          <div className='social'>
            <ul>
              <li>
                <a href='https://github.com/rabius-sunny'>
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href='https://twitter.com'>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/in/rabius-sunny'>
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href='https://facebook.com/rabibinsalam'>
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className='dudeBtn' style={{ padding: '30px 0' }}>
            <a
              href='https://drive.google.com/uc?export=download&id=1SoEau1dfnTpKhf9axwTZ5-ofTKWF6B-B'
              target='_blank'
              rel='noreferrer'
            >
              Download CV
            </a>
            <Link to='/contact'>Contact</Link>
          </div>
        </Container>
      </div>
      <div style={{ margin: '20px 0' }}>
        <Container>
          <Grid container>
            <Grid item md={6} sm={12}>
              <h1 style={{ fontSize: '30px' }} className='sectionTitle'>
                Career Objectives
              </h1>
              <p style={{ padding: '0 20px' }}>
                Hello, I am Rabius Sunny, Programmer, Web Designer, Junior Full
                Stack Developer and Writer
              </p>
              <p style={{ padding: '0 20px' }}>
                I adept at contributing to collaborative working environments,
                finding solutions and determining customer satisfaction. Built
                web applications for desktop, tablet and mobile users with the
                latest front end technologies and tools meeting highest
                standards, best practices and speed. Designed and developed web
                applications across multiple APIs, third-party integrations and
                databases. With the practice of Piousness, Honesty and Hard
                Woking, I want to contribute to a company's growth and success.{' '}
              </p>
            </Grid>
            <Grid item md={6} sm={12}>
              <h1 style={{ fontSize: '30px' }} className='sectionTitle'>
                Basic Information
              </h1>
              <p style={{ padding: '20px' }}>
                <table>
                  <tbody>
                    <tr>
                      <td>Adress : </td>
                      <td>College Road, Rangpur</td>
                    </tr>
                    <tr>
                      <td>Place of Birth: </td>
                      <td>Rangpur, Bangladesh</td>
                    </tr>
                    <tr>
                      <td>Language :</td>
                      <td>Bengali, English, Arabic, Hindi, Urdu</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </Grid>
          </Grid>
          <section>
            <Grid container>
              <Grid item md={6} sm={12}>
                <h1 style={{ fontSize: '30px' }} className='sectionTitle'>
                  Programming Skills
                </h1>
                <p style={{ padding: '0 40px' }}>
                  <ul>
                    <li>
                      Skillfully create web applications with HTML, CSS, ES6 and
                      Javascript’s libraries.
                    </li>
                    <li>
                      Use ReactJs, React-Router, Hooks, Context, ReduxJs,
                      Reactchart, d3, NodeJs, ExpressJs, Axios, MongoDB, Gatsby,
                      Stackbit for fullstack cross browser applications and
                      SASS, Bootstrap, ReactBootstrap, Material UI, Tailwind
                      css, Styled Component, css modular for styling,
                      responsiveness and preprocessor.{' '}
                    </li>
                    <li>
                      Github, Firebase, Netlify, Heroku, JWT for Development
                      Operations and Authentication purposes.{' '}
                    </li>
                    <li>
                      Use Git and Github, bash, zsh, Docker, Chrome Dev Tool,
                      npm, yarn, VSCode, Sublime, Figma, JIRA as productivity
                      tools.
                    </li>
                    <li>
                      Familiar with Php, Typescript, Python, NextJs, React
                      Native, ElectronJs and Object Oriented Programming.
                    </li>
                  </ul>
                </p>
              </Grid>
              <Grid item md={6} sm={12}>
                <h1 style={{ fontSize: '30px' }} className='sectionTitle'>
                  About
                </h1>
                <p style={{ padding: '0 40px' }}>
                  <ul>
                    <li>
                      Fast learner, hard worker, experienced in different
                      offline productivity tools.
                    </li>
                    <li>
                      Expertise in Linux ecosystem, experienced in different
                      Linux based distros, web application vulnerabilities and
                      penetration testing.
                    </li>
                    <li>
                      Capable of working into the React ecosystem and using
                      different packages and resources built on ReactJs, overall
                      thinking in the ReactJs way.{' '}
                    </li>
                    <li>
                      Skilled at writing well-designed, testable and efficient
                      code with current best practices of programmers.
                    </li>
                  </ul>
                </p>
              </Grid>
            </Grid>
          </section>
        </Container>
      </div>
      <Footer />
    </main>
  )
}

export default Resume
