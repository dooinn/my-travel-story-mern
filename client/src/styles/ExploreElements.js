import styled from 'styled-components'


export const Section = styled.section`
width: 100vw;
height: auto;
background: #f4bd2c;
display: flex;
flex-direction: column;


.section-header{
width: 100vw;
height: auto;
justify-content: center;
align-items: center;
display: flex;
padding-top: 2.5rem;
}


.modal {
width: 100%;
height: 100%;
top: -100%;
left: 0%;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 0.3s;
background: rgba(0,0,0,0.7);
z-index: 20;


}

figure {
    width: 100%;
    height: 100%;
  
}



.modal.active{
top:0;
left: 0;
transition: 350ms;
z-index: 900;
}

article {
display: flex;
position: fixed;
width: 70%;
height: 70%;
transition: left .4s;
background: #f4bd2c;
box-shadow: 0 0 15px rgba(0, 0, 0, .5);
z-index: 9999;
color: black;
}

.modal-post-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.modalPost-title{
    font-size: 2rem;
   font-family: 'Anton', sans-serif;
}

.modalPost-body{
    font-size: 0.8rem;
    font-family: 'Alice', serif;
    margin-bottom: 1rem;

}

.modalPost-date{
    font-size: 0.7rem;
    font-family: 'Alice', serif;
    color: gray;
    margin-bottom: 1rem;

}

.comment-container{
    display: flex;
}

.modal-left-column{
    width: 100%;
}

.modal-right-column{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2rem;

    
}

.post-header{
    display: flex;
    align-items: center;

}

.author__image{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    margin-right: 1rem;
}

.section-header{
    width: 100%;
    height: 30vh;
    display: flex;

}


.icon-image{
    width: 10rem;
    height: auto;

}

.hero-text{
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 7px #252524;
    font-family: 'Anton', sans-serif;

}

.hero-subText{
    color: white;
    font-family: 'Alice', serif;
    font-style: italic;
}

.section-body{
    width: 100vw;
    height: auto;
    background: #f4bd2c;

}

.comment-input{
    width: 100%;
    border: none;
    outline: none;
    height: 2rem;
    padding: 1rem;
    background: transparent;
    border-bottom: 1px solid black;

}

@media screen and (max-width: 768px){

.icon-image{
   font-size:0.7rem;
}

.hero-text{
    font-size: 1rem;
}
.hero-subText{
    font-size: 0.7rem;
}


article{
    flex-direction: column;
    height: 40rem;
}





}

@media screen and (max-width: 400px){

}

`;


export const ImageGrid = styled.div`
width: 100%;
display: flex;
overflow: auto;
height: auto;




.image-container{
width: 100%;
height:auto;
position: relative;
padding: 1rem;

}




.post__image{
    width: 30rem;
    height:30rem;
    object-fit: cover;

}


.overlay__image {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    padding: 2rem;
}




.overlay__box{
    width: 100%;
    height: auto;
    font-family: 'Anton', sans-serif;
    display: flex;
    flex-direction: column;
    color:white;
    padding: 1rem;
 

  
}

.overlay__userName{
    display: flex;
    align-items: center;
  
}

.post-title{
    font-size: 3rem;
}



.author__image{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    margin-right: 1rem;
}

.likes__box{
    display: flex;
    margin-bottom: 2rem;

   
}


.read-btn{
    width: 100%;
    cursor:pointer;
}

.read-btn:hover{
    color: #f4bd2c;
}


@media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin: 0;

    





}

@media screen and (max-width: 400px){

}




`;