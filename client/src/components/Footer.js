import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Section>
            <p>
                Copyright © Dooinn Kim
                {new Date().getFullYear()}
            </p>
        </Section>
    )
}



export default Footer


const Section = styled.div`
width: 100vw;
height: 3rem;
background: #f4bd2c;
display: flex;
justify-content: center;
align-items: center;

`;
