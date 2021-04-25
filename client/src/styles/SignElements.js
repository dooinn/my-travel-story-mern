import styled from 'styled-components'

export const Section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
background: #f4bd2c;

.left-column{
    flex: 50%;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.signImg{
    width: 30rem;
    height: auto;
}

.right-column{
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero-text{
    color: white;
    font-size: 5rem;
    text-shadow: 2px 2px 7px #252524;
    font-family: 'Anton', sans-serif;
    margin-bottom: 1rem;
}

.profile-image{
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.sign-input{
    width: 80%;
    height: 2rem;
    outline: none;
    border: none;
    padding: 0rem 2rem;
    margin-bottom: 1rem;
}



.image-upaloadr-label{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.plus-label{
    margin-top: 0.5rem;
    cursor: pointer;
    transition: .3s;
    

}

.plus-label:hover{
    transform:scale(1.1);
}

.link-btn{
    width: 80%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(to right top, #171a1e, #171d1f, #192020, #1d221f, #22241f);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Alice', serif;
    color: white;
    transition: .3s;
    cursor: pointer;
    box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
}

.link-btn:hover{
    transform: scale(1.05);
}

.direction-link{
    text-decoration: none;
    color: black;
    margin: 0.3rem;
}

.direction-link:hover{
    text-decoration:underline;
}

@media screen and (max-width: 768px){
    flex-direction: column;
    padding: 2rem 0rem;

    .signImg{
        width: 10rem;
    }
   


}

@media screen and (max-width: 400px){



}


`;