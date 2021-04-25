import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Section } from '../styles/SignElements'
import signImg from '../assets/signup.png'
import { ImPlus } from 'react-icons/im'



const Signup = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState(undefined)
    const history = useHistory()
    const [image, setImage] = useState("")
    const [imgData, setImgData] = useState("");

    const onChangePicture = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0])
        }
    }



    useEffect(() => {
        if (url) {
            uploadFields()
        }
    }, [url])

    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "new-insta")
        data.append("cloud_name", "dwgp5yzfk")
        fetch("https://api.cloudinary.com/v1_1/dwgp5yzfk/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const uploadFields = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            console.log("invalid email")
            alert("Invalid email")
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                profile_pic: url
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const PostData = () => {
        if (image) {
            uploadPic()
        } else {
            uploadFields()
        }

    }


    return (
        <Section>
            <div className="left-column">
                <img className="signImg" src={signImg} alt="signup logo" />
            </div>
            <div className="right-column">
                <h1 className="hero-text">Sign Up</h1>
                {imgData &&
                    <img src={imgData} className="profile-image" />
                }
                <input
                    className="sign-input"
                    type="text"
                    placeholder="Type your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
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
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div className="image-uploader">
                    <label className="image-upaloadr-label" htmlFor="attach-file">
                        <span>Upload your profile image</span>
                        <ImPlus className="plus-label" />
                    </label>
                    <input
                        id="attach-file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        onChange={onChangePicture}
                        style={{
                            opacity: 0,
                        }}
                    />
                </div>
                <button
                    className="link-btn"
                    onClick={() => PostData()}
                >Sign Up</button>
                <Link to="/signin" className="direction-link">Already have an account?</Link>
                <p>
                    Copyright © Dooinn Kim
                {new Date().getFullYear()}
                </p>





            </div>


        </Section>
    )
}

export default Signup
