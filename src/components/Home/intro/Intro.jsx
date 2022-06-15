import Typical from 'react-typical'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import './intro.css'
import img from '../../../images/propicc.jpg'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <section className='intro'>
      <Container>
        <Grid container className='display'>
          <Grid item md={5}>
            <div className='dudeImg'>
              <img src={img} alt='dude' />
            </div>
          </Grid>
          <Grid item md={7}>
            <div className='dudeBio'>
              <p>
                <Typical
                  steps={[
                    'Front end developer',
                    2000,
                    'Back end developer',
                    2000,
                    'Full-stack developer',
                    2000,
                    'Writer',
                    2000
                  ]}
                  loop={Infinity}
                />
              </p>
              <h1>Rabius Sunny (rezoan)</h1>
              <p>
                Web Developer adept at contributing to collaborative working
                environments, finding solutions and determining customer
                satisfaction. Designed and developed web applications across the
                latest technologies and tools, multiple APIs, third-party
                integrations and databases meeting the highest standards, best
                practices and speed.
              </p>
              <div className='dudeBtn'>
                <a
                  href='https://drive.google.com/uc?export=download&id=1ZJdc3z2_y29-UaU6qU7I8HnMQxr31sVl'
                  target='_blank'
                  rel='noreferrer'
                >
                  Download CV
                </a>
                <Link to='/contact'>Contact</Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Intro
