import React from 'react'
import '../styles/background.sass'
import world from '../assets/world.png'
import guitar from '../assets/guitar.png'
import console from '../assets/console.png'
import '../styles/typewriter.css'

function home() {
    return (
        <div className="container">
            <div>
                <img src={world} className="world" alt="globe"/>
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
    )
}

export default home
