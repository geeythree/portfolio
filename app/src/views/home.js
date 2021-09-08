import React from 'react'
import '../styles/background.sass'
import guitar from '../assets/guitar.png'
import console from '../assets/console.png'
import '../styles/typewriter.css'
import { Navbar, Stars, World } from '../components'
import '../styles/star.sass'

function home() {
    return (
        
        <>
        <Stars />
        <div className="container">
        <Navbar />
            <div>
                <div className='world'>
                    <World />
                <div className="line1"></div>   
                </div>
                <h1 className="title">
                    Geeythree.
                    <img src={console} className="console" alt="console" />
                        <span className="console-text anim-typewriter">
                            console.log('Hey there!')
                        </span>
                </h1>
                <img src={guitar} className="guitar" alt="guitar" />
            </div>
        </div>
        </>
    )
}

export default home
