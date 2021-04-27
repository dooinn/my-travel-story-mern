import styled from 'styled-components'

export const Section = styled.div`
width: 100%;
height: auto;
background: #f4bd2c;
padding: 5rem;
display: flex;
flex-direction: column;
font-family: 'Anton', sans-serif;
.section-header{
    display: flex;
    justify-content: flex-end;
    
}
.icon-image{
    width: 10rem;


}
.hero-text{
    color: white;
    font-size: 5rem;
    text-shadow: 2px 2px 7px #252524;
    font-family: 'Anton', sans-serif;

}

.contents-container{
    display: flex;
    padding: 1rem;
}

.column{
    flex:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.column-image{
    width: 30rem;
    height: auto;
    box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
}
.column-number{
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
margin-right: 1rem;
    border-radius: 50%;
    background: orange;
}
.column-title{
    display: flex;
    justify-content:center;
    align-items: center;
}

@media screen and (max-width: 768px){
    .contents-container{
        flex-direction: column;
    }
    .column{
        padding: 1rem;
    }

}



`;