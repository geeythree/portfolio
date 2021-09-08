import React from 'react'
import { Navbar, Stars } from '../components'
import '../styles/background.sass'
import '../styles/about.sass'
import avatar from '../assets/avatar.png'
import me from '../assets/me.jpg'

function About() {
    return (
        <>
        
        <div className="container">
            <Navbar />
            <div className='about'>
                <img src={avatar} alt="me" className="image" />
                <div className='content'>
                    Hello! I'm Gayathri Satheesh aka Geeythree. I'm currently pursuing Masters' degree in
                    Computer Science with specilaization in Machine Intelligence at Digital University Kerala
                    (previously known as Indian Institute of Information Technology and Management, Kerala).
                    Web development is my forte. I use MERN stack for developing cool websites. Feel free to 
                    get in touch with me to let me help you build your dream website!!<br />
                    Academically, my area of focus is Cognitive AI and, I'm currently reasearching in 
                    Cognitive Architectures under the supervision of Prof. A.P. James at NeuroAGI lab, DUK. 
                    <br />
                    Apart from that, I enjoy playing guitar and have worked with couple of local bands. 
                    I'm also an active Rotaract.
                    <p className='quote'> May the odds be ever in your favor! :)</p>
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default About
