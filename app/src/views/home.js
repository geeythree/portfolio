import React from 'react'
import '../styles/background.sass'
import world from '../assets/world.png'
import guitar from '../assets/guitar.png'
import console from '../assets/console.png'
import '../styles/typewriter.css'

function home() {
    return (
        <div class="container">
            <div>
                <img src={world} class="world" alt="globe"/>
                <h1 class="title">
                    Geeythree.
                    <img src={console} class="console" alt="console" />
                        <span class="console-text anim-typewriter">
                            console.log('Hey there!')
                        </span>
                </h1>
                <img src={guitar} class="guitar" alt="guitar" />
            </div>
        </div>
    )
}

export default home
