import React from 'react'
import '../../../App.css'
import Carousel from 'nuka-carousel';
import './testimonials.css'
import logo from '../../../images/thumbnail.png'
import { Container } from '@material-ui/core';

function Testimonials() {
    return (
        <section>
            <Container>
                <h1 className="sectionTitle">Testimonials</h1>
                <Carousel>
                    <div className="qoute">
                        <div className="inQuote">
                            <div className="qouteImg"><img src={logo} alt="" /></div>
                            <div className="innerQuote">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque culpa cum, architecto nobis blanditiis harum odit dignissimos iure magnam!</p>
                                <h3>Mr. Js Dude 1</h3>
                                <p><small>Software Engineer</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="qoute">
                        <div className="inQuote">
                            <div className="qouteImg"><img src={logo} alt="" /></div>
                            <div className="innerQuote">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque culpa cum, architecto nobis blanditiis harum odit dignissimos iure magnam!</p>
                                <h3>Mr. Js Dude 2</h3>
                                <p><small>Software Engineer</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="qoute">
                        <div className="inQuote">
                            <div className="qouteImg"><img src={logo} alt="" /></div>
                            <div className="innerQuote">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque culpa cum, architecto nobis blanditiis harum odit dignissimos iure magnam!</p>
                                <h3>Mr. Js Dude 3</h3>
                                <p><small>Software Engineer</small></p>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonials

