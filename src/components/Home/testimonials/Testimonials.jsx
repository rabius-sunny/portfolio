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
                                <p>Sunny is very dedicated and hard worker. He've been working with us for 6 years, I found him pious and honest.</p>
                                <h3>Mr. Rezoan Hassan</h3>
                                <p><small>CEO, Razin Car Decora</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="qoute">
                        <div className="inQuote">
                            <div className="qouteImg"><img src={logo} alt="" /></div>
                            <div className="innerQuote">
                                <p>Sunny is very dedicated and hard worker. He've been working with us for 6 years, I found him pious and honest.</p>
                                <h3>Mr. Rezoan Hassan</h3>
                                <p><small>CEO, Razin Car Decora</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="qoute">
                        <div className="inQuote">
                            <div className="qouteImg"><img src={logo} alt="" /></div>
                            <div className="innerQuote">
                                <p>Sunny is very dedicated and hard worker. He've been working with us for 6 years, I found him pious and honest.</p>
                                <h3>Mr. Rezoan Hassan</h3>
                                <p><small>CEO, Razin Car Decora</small></p>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonials

