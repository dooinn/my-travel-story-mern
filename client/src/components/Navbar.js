import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../styles/NavbarElements'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const showModal = () => setModalOpen(!modalOpen);
    const changeBackground = () => {
        if (window.pageYOffset >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <Nav>
            <img className="logo-image" src={logo} alt="logo"></img>
            <nav className="nav-container">
                <ul className="list-container">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Explore</Link></li>
                    <li><Link>Followings</Link></li>
                </ul>
                <Link className="link-btn">Sign in/up</Link>
            </nav>
            <GiHamburgerMenu
                className="hamburger-menu"
                style={{ color: navbar ? 'white' : '#1a1f34', transition: '0.4s' }}
                onClick={() => showModal()}
            />
            <div className={modalOpen ? "modal active" : "modal"} >
                <AiOutlineClose className="close__btn" onClick={() => showModal()} />
                <ul className="newList-container">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Explore</Link></li>
                    <li><Link to="/">Followings</Link></li>
                </ul>
                <Link className="link-btn">Sign in/up</Link>
            </div>

        </Nav>
    )
}

export default Navbar
