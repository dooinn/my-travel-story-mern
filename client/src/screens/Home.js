import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../styles/HomeElements'
import logo from '../assets/logo.png'
import About from './About'

const Home = () => {
    return (
        <>
            <Section>
                <div className="hero-cotainer">
                    <h1 className="hero-text">Keep & Share</h1>
                    <h1 className="hero-text">Your Travel Memory!</h1>
                    <Link className="link-btn">Learn more</Link>
                </div>
                <img className="logo-image" src={logo} alt="logo"></img>
            </Section>
            <About />
        </>





    )
}

export default Home
