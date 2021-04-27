import styled from 'styled-components';
import createBg from '../assets/create-bg.png'

export const Section = styled.div`
width: 100vw;
height: 100vh;
justify-content: center;
background-image: url(${createBg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
font-family: 'Anton', sans-serif;


.background-filter {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;

}

`;

export const Card = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: auto;
min-height: 30rem;
border-radius: 1.5rem;
box-shadow:1px 2px 2px 1px black;
align-items: center;
justify-content: center;


label {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}



h1{
    margin-bottom: 3rem;
    font-size: 3rem;
    
}

input{
    margin-bottom: 1rem;
    width: 100%;
    height: 2rem;
    padding: 0.7rem;
}

button{
    width: 100%;
    padding: 0.7rem;
    background: rgb(63,94,251);
    border: none;
    color: white;
    border-radius: 0.3rem;
    outline: none;
    cursor: pointer;
    
}


`;