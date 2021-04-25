import styled from 'styled-components'
import background from '../assets/background.png'

export const Section = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
font-family: 'Anton', sans-serif;
justify-content: center;
align-items: flex-end;

a{
    text-decoration: none;
}

.hero-cotainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 5rem 5rem 0 0;

}
.hero-text{
    color: white;
    font-size: 5rem;
    text-shadow: 2px 2px 7px #252524;
}

.logo-image{
    width: 40rem;
    height: auto;
}

.link-btn{
    padding: 0.5rem 1rem;
    background-image: linear-gradient(to right top, #171a1e, #171d1f, #192020, #1d221f, #22241f);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Alice', serif;
    color: white;
    box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
}


@media screen and (max-width: 768px){

    .hero-cotainer{
        padding: 2rem 2rem 0rem 0rem;

    }
    .hero-text{
        font-size: 2.5rem;
    }

    .logo-image{
    display: none;

}

}

@media screen and (max-width: 400px){

.hero-cotainer{
    padding: 2rem 2rem 0rem 0rem;

}
.hero-text{
    font-size: 2rem;
}

.logo-image{
display: none;

}
}

`;