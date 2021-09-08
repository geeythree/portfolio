import React, { useState } from 'react'
import '../../styles/navbar.sass'
import {Link} from 'react-router-dom'
import {RiMenu4Line, RiCloseLine} from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'


function Navbar() {
    return (
        <>
          <div className="nav">
                <Link to='/' className="link">
                    Home
                </Link>
                <Link to='/about' className="link">
                    About me
                </Link>
                <Link to='/' className="link">
                    Portfolio
                </Link>
                <Link to='/' className="link">
                    Articles
                </Link>
                <Link to='/contact' className="link">
                    Contact Me
                </Link>
                <Link to='https://github.com/geeythree/portfolio/blob/main/gayathri_satheesh.pdf' target='_blank' className="link" download>
                    CV
                </Link>
            </div>
           
        </>
    )
}

export default Navbar
