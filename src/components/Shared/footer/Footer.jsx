import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css'

function Footer() {
    return (
        <>
            <div className="myfooter">
                <div className="footer">
                    <div className="social">
                        <ul>
                            <li><a href="https://github.com/rabius-sunny"><GitHubIcon /></a></li>
                            <li><a href="https://twitter.com"><TwitterIcon /></a></li>
                            <li><a href="https://linkedin.com/in/rabius-sunny"><LinkedInIcon /></a></li>
                        </ul>
                    </div>
                    <div className="copyRight">
                        <p>@ 2021, All Right Reserved. JsDude</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>This is a Material UI Project by <a href="https://facebook.com/rabibinsalam">Rabius Sunny</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer
