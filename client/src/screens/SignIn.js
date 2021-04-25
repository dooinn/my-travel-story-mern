import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserState'
import { Link, useHistory } from 'react-router-dom'
import { Section } from '../styles/SignElements'
import signImg from '../assets/signIn.png'

const SignIn = () => {

    const { state, dispatch } = useContext(UserContext);
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            console.log("Invalid email")
            alert("Invalid Email")
            return
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    console.log(data.error)
                    alert(data.error)
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: data.user })
                    console.log("Singnin success")
                    history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Section>
            <div className="left-column">
                <img className="signImg" src={signImg} alt="signIn logo" />
            </div>
            <div className="right-column">
                <h1 className="hero-text">Sign In</h1>

                <input
                    className="sign-input"
                    type="text"
                    placeholder="Type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                ></input>
                <input
                    className="sign-input"
                    type="password"
                    placeholder="Type your password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}

                ></input>
                <button
                    className="link-btn"
                    onClick={() => PostData()}
                >Sign In</button>
                <Link to="/signup" className="direction-link">Don't have an account?</Link>
                <Link className="direction-link">Forgot Password?</Link>
                <p>
                    Copyright © Dooinn Kim
                {new Date().getFullYear()}
                </p>




            </div>


        </Section>
    )
}

export default SignIn
