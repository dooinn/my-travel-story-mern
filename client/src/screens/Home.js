import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../styles/HomeElements'
import logo from '../assets/logo.png'
import About from './About'
import LearnMore from './LearnMore'

const Home = () => {
    return (
        <>
            <Section>
                <div className="hero-cotainer"
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-delay='100'
                    data-aos-anchor-placement='center bottom'>
                    <h1 className="hero-text">Keep & Share</h1>
                    <h1 className="hero-text">Your Travel Memory!</h1>
                    <Link to="/learnmore" className="link-btn">Learn more</Link>
                </div>
                <img
                    className="logo-image"
                    src={logo}
                    alt="logo"
                    data-aos='zoom-out'
                    data-aos-duration='3000'
                    data-aos-once='true'
                    data-aos-delay="300"
                    data-aos-anchor-placement='center bottom'
                ></img>
            </Section>
            <About />
            <LearnMore />
        </>





    )
}

export default Home
