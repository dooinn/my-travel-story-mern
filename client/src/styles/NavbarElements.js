import styled from 'styled-components'

export const Nav = styled.nav`
width: 100vw;
height: 10vh;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0rem 3rem;
background: transparent;
positioN: fixed;
font-family: 'Anton', sans-serif;


a{
    text-decoration: none;
    color:white;
}




nav{
    display: flex;
    align-items: center;
}

.logo-image{
width: 10rem;
height: auto;

}

.list-container{
    display: flex;
}

.list-container li {
    margin-right: 1rem;
    list-style: none;
    transition: .3s;
}

.list-container li:hover {
    transform: scale(1.1);
    
    

}

.toggleButton {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dropdown{
    position: absolute;
    z-index: 1000;
    top:110%;
    left: -300%;
    width: 10rem;
    height: 6.5rem;
    border-radius: 15px;
    box-shadow: -2px 3px 7px -1px rgba(0,0,0,0.5);
-webkit-box-shadow: -2px 3px 7px -1px rgba(0,0,0,0.5);
-moz-box-shadow: -2px 3px 7px -1px rgba(0,0,0,0.5);
   background-color: white;

}
.user-image{
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
    transition: .3s;

}

.user-image:hover{
    transform: scale(1.05);

}

.dropdown-list {
    list-style: none;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.dropdown-list li {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
}

.dropdown-list li:hover{
    transform: scale(1.05);

}



.dropdown-list a {
    color: black;
}

.list-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
}


.dropdown.active {
    display: block;


}

.dropdown.inactive {
    display: none;

}


.link-btn{
    padding: 0.5rem 1rem;
    background-image: linear-gradient(to right top, #171a1e, #171d1f, #192020, #1d221f, #22241f);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Alice', serif;
    transition: .3s;
    box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 18px -6px rgba(0,0,0,0.75);
}

.link-btn:hover{
    transform: scale(1.05);
}

.hamburger-menu{
    display: none;
    font-size: 2rem;
    cursor: pointer;
}

.modal {
width: 100%;
height: 100%;
top: -100%;
left: 0;
z-index: 999;
background: #5985ff;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 350ms;
opacity: 0.9;

}

.modal.active{
top:0;
left: 0;
transition: 350ms;
z-index: 900;
}

.close__btn{
color:white;
font-size:2rem;
position: absolute;
top:2.5%;
right:10%;
cursor:pointer;
transition: 0.3s;
}

.close__btn:hover{
transform: scale(1.2);
}

.newList-container{

}

.newList-container li{
    list-style:none;
    font-size: 3rem;
    padding: 0.5rem;

}

.newList-container a{
    text-decoration: none;
    color: white;
    transition: .5s;
}

.newList-container a:hover{
    color: #1a1f34
}

@media screen and (max-width: 768px){

    padding: 0rem 1.5rem;

    .nav-container{
        display: none;
    }

    .hamburger-menu{
    display: inline-block;
}
}




`;