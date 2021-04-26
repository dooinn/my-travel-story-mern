import styled from 'styled-components'


export const Section = styled.section`
width: 100vw;
height: 100vh;
background: #f4bd2c;
display: flex;
flex-direction: column;
position: relative;


.section-header{
width: 100%;
height: 30vh;
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
background: white;
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
    font-size: 0.8rem;

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
    height: 100vh;
    background: #f4bd2c;
    overflow: auto;

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


`;

export const ImageGrid = styled.div`
width: 100%;
height: 70vh;
display: flex;
align-items: center;


.image-container{
width: 100%;
height: 20rem;
display: flex;
flex-direction: column;
position: relative;
margin: 1rem;
-webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

.post__image{
width: 30rem;
height: 100%;
object-fit: cover;


}

.overlay__image {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    top: 0;
    left: 0;
    z-index: 12;


 
}

.overlay__box{
    width: 100%;
    height: auto;
    font-family: 'Anton', sans-serif;
    display: flex;
    flex-direction: column;
    color:white;


}

.overlay__userName{
    width: 100%;
    display: flex;
    align-items: center;


}

.post-title{

}

.author__image{

}

.likes__box{
    font-size: 1rem;

}

.read-btn{
    float: right;
    display: flex;
    width: 100%;
    cursor:pointer;

}

.read-btn:hover{
    color: #f4bd2c;

}


@media screen and (max-width: 768px){
    flex-direction: column;
    padding: 0rem;



    .image-container{
        width: 100%;
        margin: 0;
    }
}

@media screen and (max-width: 400px){

}



`
