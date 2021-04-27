import React from 'react'
import { Section } from '../styles/AboutElements'
import icon from '../assets/about.png'
import logo from '../assets/logo.png'


const About = () => {
    return (
        <Section>
            <div
                className="column-left"
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay="100"
                data-aos-anchor-placement='center bottom'
            >
                <div className="columnLeft-header">
                    <img className="icon-image" src={icon} alt="icon"></img>
                    <h1 className="hero-text">About us</h1>
                </div>
                <div className="columnLeft-body">
                    <p className="body-text">
                        "<b>my Travel Diary</b>" is the
                        web service that allows travellers to keep and share their inspirational travel story or memory with other users.
                </p>
                    <p className="body-text">
                        "<b>my Travel Diary</b>" was launched in April 2021 to promote the network between travellers that enables them to get travelling inspiration from each other
                </p>

                </div>

            </div>
            <div
                className="column-right"
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay="100"
                data-aos-anchor-placement='center bottom'
            >
                <img className="logo-image" src={logo} alt="logo"></img>
            </div>

        </Section>
    )
}

export default About
