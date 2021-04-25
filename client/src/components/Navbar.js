import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserState'
import { Link, useHistory } from 'react-router-dom'
import { Nav } from '../styles/NavbarElements'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const Navbar = () => {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    const [modalOpen, setModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [navbar, setNavbar] = useState(false);

    const toggleMenu = () => setIsActive(!isActive)
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
            <Link to="/">
                <img className="logo-image" src={logo} alt="logo"></img>
            </Link>

            <nav className="nav-container">
                <ul className="list-container">
                    <li><Link to="/">Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Explore</Link></li>
                    <li><Link>Followings</Link></li>
                </ul>
                {state ?
                    <>
                        <div className="toggleButton">
                            <div
                                onClick={() => toggleMenu()}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    className="user-image"
                                    src={state ? state.profile_pic : "loading"} alt="user avatar"
                                />
                            </div>
                            <div
                                className={`dropdown ${isActive ? "active" : "inactive"}`}
                            >
                                <ul className="dropdown-list">
                                    <li><Link
                                        to="/profile"
                                        className="list-btn"
                                        onClick={() => toggleMenu()}

                                    >
                                        <AccountCircleIcon
                                            style={{ marginRight: "1rem" }}
                                        />
                                        Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signin"
                                            className="list-btn"
                                            onClick={() => {
                                                localStorage.clear()
                                                dispatch({ type: "CLEAR" })
                                                history.push('/signin')
                                                toggleMenu()
                                            }}
                                        >
                                            <MeetingRoomIcon
                                                onClick={() => toggleMenu()}
                                                style={{ marginRight: "1rem" }} />
                                            Logout
                                            </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </>

                    :
                    <Link to="/signin" className="link-btn">Sign in/up</Link>
                }
            </nav>
            <GiHamburgerMenu
                className="hamburger-menu"
                style={{ color: navbar ? 'white' : '#1a1f34', transition: '0.4s' }}
                onClick={() => showModal()}
            />
            <div className={modalOpen ? "modal active" : "modal"} >
                <AiOutlineClose className="close__btn" onClick={() => showModal()} />
                <ul className="newList-container">
                    {state &&
                        <img
                            className="user-image"
                            src={state ? state.profile_pic : "loading"} alt="user avatar"
                        />
                    }

                    <li><Link to="/" onClick={() => showModal()}>Home</Link></li>
                    <li><Link to="/" onClick={() => showModal()}>About</Link></li>
                    <li><Link to="/" onClick={() => showModal()}>Explore</Link></li>
                    <li><Link to="/" onClick={() => showModal()}>Followings</Link></li>
                    {state &&
                        <li><Link to="/profile" onClick={() => showModal()}>Profile</Link></li>
                    }
                </ul>

                {state ?
                    <>
                        <Link
                            className="link-btn"
                            to="/signin"
                            onClick={() => {
                                localStorage.clear()
                                dispatch({ type: "CLEAR" })
                                history.push('/signin')
                                showModal()
                            }}

                        >
                            Logout
                        </Link>
                    </>
                    :
                    <Link className="link-btn">Sign in/up</Link>
                }



            </div>

        </Nav>
    )
}

export default Navbar
