import React from 'react'
import { Section } from '../styles/LearnMoreElements'
import icon from '../assets/howto-icon.png'
import howOne from '../assets/how1.png'
import howTwo from '../assets/how2.png'
import howThree from '../assets/how3.png'
import howFour from '../assets/how4.png'
import howFive from '../assets/how5.png'


const LearnMore = () => {
    return (
        <Section>
            <div
                className="section-header"
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay="100"
                data-aos-anchor-placement='center bottom'>
                <h1 className="hero-text">How it works?</h1>
                <img className="icon-image" src={icon} alt="icon"></img>
            </div>
            <div
                className="contents-container"
                data-aos='zoom-out'
                data-aos-duration='3000'
                data-aos-once='true'
                data-aos-delay="300"
                data-aos-anchor-placement='center bottom'
            >
                <div className="column">
                    <img className="column-image" src={howOne} alt="how to 1" />
                </div>
                <div className="column">
                    <div className="column-title">
                        <h1 className="column-number">1</h1>
                        <h2>Click Signin/Signup Button !</h2>
                    </div>

                </div>
            </div>
            <div
                className="contents-container"
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay="100"
                data-aos-anchor-placement='center bottom'>

                <div className="column">
                    <div className="column-title">
                        <h1 className="column-number">2</h1>
                        <h2>Sign In or Create an my travel diary account!</h2>
                    </div>

                </div>
                <div className="column">
                    <img className="column-image" src={howTwo} alt="how to 2" />
                </div>
            </div>
            <div
                className="contents-container"
                data-aos='zoom-out'
                data-aos-duration='3000'
                data-aos-once='true'
                data-aos-delay="300"
                data-aos-anchor-placement='center bottom'
            >
                <div className="column">
                    <img className="column-image" src={howThree} alt="how to 3" />
                </div>
                <div className="column">
                    <div className="column-title">
                        <h1 className="column-number">3</h1>
                        <h2>Create an account with your email and your wonderful profile image!</h2>
                    </div>

                </div>
            </div>
            <div
                className="contents-container"
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay="100"
                data-aos-anchor-placement='center bottom'
            >

                <div className="column">
                    <div className="column-title">
                        <h1 className="column-number">4</h1>
                        <h2>Sign in, and now you are ready to create your own travel post</h2>
                    </div>

                </div>
                <div className="column">
                    <img className="column-image" src={howFour} alt="how to 4" />
                </div>
            </div>
            <div
                className="contents-container"
                data-aos='zoom-out'
                data-aos-duration='3000'
                data-aos-once='true'
                data-aos-delay="300"
                data-aos-anchor-placement='center bottom'
            >
                <div className="column">
                    <img className="column-image" src={howFive} alt="how to 5" />
                </div>
                <div className="column">
                    <div className="column-title">
                        <h1 className="column-number">5</h1>
                        <h2>Explore other travellers' beautiful travelling story!</h2>
                    </div>

                </div>
            </div>

        </Section>
    )
}

export default LearnMore
