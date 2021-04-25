import React from 'react'
import { Section } from '../styles/MyProfileElements'

const MyProfile = () => {
    return (
        <Section>
            <div className="column-left">
                <img className="profile-img"></img>
                <div className="profileInfo-container">
                    <div>
                        <h3 className="profile-name"></h3>
                        <button className="profile-control"></button>
                    </div>

                </div>

            </div>
            <div className="column-right">

            </div>


        </Section>
    )
}

export default MyProfile
