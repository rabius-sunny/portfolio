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
                            <li><a href="https://github.com/rabius-sunny" target="_blank" rel="noreferrer"><GitHubIcon /></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon /></a></li>
                            <li><a href="https://linkedin.com/in/rabius-sunny" target="_blank" rel="noreferrer"><LinkedInIcon /></a></li>
                        </ul>
                    </div>
                    <div className="copyRight">
                        <p>Copyright @ 2021 || All Right Reserved</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>Potfolio || <a href="https://rabius-sunny.netlify.app">Rabius Sunny</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer
