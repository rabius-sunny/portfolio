import emailjs from 'emailjs-com';
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

const Contact = () => {

    const classes = useStyles();
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_1es8u2q', e.target, 'user_XnfZgk3FK10hADySIkJx1')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text))
        e.target.reset()
    }

    return (
        <>
            <Navigation />
            <Container>
                <div className="contact">
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField name="name" label="Your Name" /> <br />
                        <TextField required name="email" label="Email Address" /> <br /> <br />
                        <TextField required
                            name="message"
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