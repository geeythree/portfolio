import React from 'react'
import { Navbar } from '../components'
import '../styles/background.sass'
import {
    GrGithub,
    GrLinkedin,
    GrMail
} from 'react-icons/gr'
import { IconContext } from 'react-icons/lib'
import { ExternalLink } from 'react-external-link'
import '../styles/contact.sass'
function Contact() {
    return (
        <>
            <IconContext.Provider 
            value={{color: '#00ADB5', size:'25px'}} >
                <div className='container'>
                    <Navbar />
                    <div className='contact'>
                        <h1>Get in touch with me</h1>
                        <div className='mail'>geeythree@gmail.com</div>
                        <div className='icons'>
                            
                            <ExternalLink className='icon' href='https://www.linkedin.com/in/geeythree'>
                                <GrLinkedin />
                            </ExternalLink>
                            <ExternalLink className='icon' href='https://www.github.com/geeythree'>
                                <GrGithub />
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Contact
