import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Section, Card } from '../styles/CreatePostElements'
import { ImPlus } from 'react-icons/im'
import Navbar from '../components/Navbar';



const CreatePost = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [imgData, setImgData] = useState("");
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title,
                    body,
                    profile_pic: url
                })
            }).then(res => res.json())
                .then(data => {

                    if (data.error) {

                    }
                    else {

                        history.push('/')
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [url])


    const postDetails = () => {
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
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })


    }



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







    return (
        <>
            <Navbar />
            <Section>
                <div className="background-filter">
                    {url && loading &&
                        <div className="loading-container">
                            <h1>Loading...</h1>
                            <CircularProgress disableShrink />
                        </div>

                    }
                    <Card
                        style={{
                            margin: "30px auto",
                            maxWidth: "500px",
                            padding: "20px",
                            textAlign: "center"
                        }}
                    >
                        <h1>What's your story in your photo?</h1>
                        <h4>Share your inspirational story and photo with others!</h4>
                        {imgData &&
                            <img src={imgData} style={{ width: "10rem", height: "10rem", objectFit: "cover", objectPosition: "top", marginBottom: "1rem" }} />
                        }
                        <input
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <div className="image-uploader">
                            <label htmlFor="attach-file">
                                <span>Upload Image</span>
                                <ImPlus style={{ marginTop: "1rem" }} />
                            </label>
                            <input
                                id="attach-file"
                                type="file"
                                accept="image/*"
                                // onChange={(e) => setImage(e.target.files[0])}
                                onChange={onChangePicture}
                                style={{
                                    opacity: 0,
                                }}
                            />
                        </div>

                        <button
                            onClick={() => postDetails()}
                        >
                            Submit post
                        </button>
                        <Link to="/" style={{ marginTop: "1rem" }}>Back to Home</Link>
                    </Card>
                </div>
            </Section>

        </>


    )
}


export default CreatePost
