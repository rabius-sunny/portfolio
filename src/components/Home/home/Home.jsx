import React from 'react'
import '../../../App.css'
import Achieves from '../achieves/Achieves'
import Footer from '../../Shared/footer/Footer'
import Intro from '../intro/Intro'
import Navigation from '../navigation/Navigation'
import Testimonials from '../testimonials/Testimonials'
import Works from '../works/Works'
import Projects from '../projects/Projects'
import ScrollTop from '../../Shared/scrollToTop/ScrollToTop'
import { Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Skills from '../Skills/Skills'

const Home = (props) => {
    return (
        <>
            <Navigation />
            <Intro />
            <Projects />
            <Skills />
            <Works />
            <Testimonials />
            <Achieves />
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <Footer />
        </>
    )
}

export default Home
