import styled from 'styled-components'
import bg from '../assets/background-about.png'

export const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;

.column-left{
    flex: 50%;
    background: #f4bd2c;
    padding: 5rem;

}

.columnLeft-header{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10rem;
 
}

.columnLeft-body{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.body-text{
    font-family: 'Alice', serif;
    color: black;
    margin-bottom: 2rem;

}

.icon-image{
    width: 10rem;
    position: absolute;
    top:-10%;
    left:10%;
    z-index: 1;
}

.hero-text{
    color: white;
    font-size: 5rem;
    text-shadow: 2px 2px 7px #252524;
    font-family: 'Anton', sans-serif;
    z-index: 3;
}

.column-right{
    flex: 50%;
    width: 100%;
    height: auto;
    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-image{
    width: 30rem;
}

@media screen and (max-width: 768px){
    flex-direction: column-reverse;
.logo-image{
    width: 18rem;
}
    .columnLeft-header{
    margin-bottom: 3rem;
}
.icon-image{
    width: 6rem;
    position: absolute;
    top:-10%;
    left:10%;
    z-index: 1;
}
.hero-text{
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 7px #252524;
    font-family: 'Anton', sans-serif;
    z-index: 3;
}






}

@media screen and (max-width: 400px){
    .column-left{
        padding: 2rem;
    }

}

`;