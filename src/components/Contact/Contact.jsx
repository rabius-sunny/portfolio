import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Navigation from '../Home/navigation/Navigation';
import Footer from '../Shared/footer/Footer';
import { Container } from '@material-ui/core';
import './contact.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '100%',
            color: 'white'
        },
    },
}));

function Contact() {

    const classes = useStyles();
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = e => {
        let formData = { ...data }
        formData[e.target.name] = e.target.value
        setData(formData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <>
            <Navigation />
            <Container>
                <div className="contact">
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField onChange={handleChange} id="name" name="name" label="Your Name" /> <br />
                        <TextField onChange={handleChange} required id="email" name="email" label="Email Address" /> <br /> <br />
                        <TextField onChange={handleChange} required
                            name="message"
                            id="message"
                            label="Your Message"
                            multiline
                            rows={4}
                            placeholder="Start Typing Your Messages..."
                            variant="outlined"
                        />
                        <input type="submit" value="Send" style={{ color: '#fff !important' }} className="inputBtn" />
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Contact