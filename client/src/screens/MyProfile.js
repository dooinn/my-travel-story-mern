import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserState'
import { Section, ImageGrid } from '../styles/MyProfileElements'
import { AiFillSetting, AiFillHeart } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoPeopleCircleOutline, IoPeopleCircleSharp, IoNewspaperOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MyProfile = () => {

    const { state, dispatch } = useContext(UserContext)
    const [mypics, setPics] = useState([])
    const [image, setImage] = useState("")
    const [data, setData] = useState([])
    const [modalPost, setModalPost] = useState({})
    const [modalOpen, setModalOpen] = useState(false);
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const [likes, setLikes] = useState([])
    const [date, setDate] = useState('')



    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setPics(result.mypost)

            })
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])
    useEffect(() => {
        if (image) {
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
                    fetch('/updatepic', {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("jwt")
                        },
                        body: JSON.stringify({
                            profile_pic: data.url
                        })
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result)
                            localStorage.setItem("user", JSON.stringify({ ...state, profile_pic: result.profile_pic }))
                            dispatch({ type: "UPDATEPIC", payload: result.profile_pic })
                            window.location.reload()
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [image])

    const updatePhoto = (file) => {
        setImage(file)
        window.location.reload()
    }


    const makeComment = (text, postId) => {
        fetch('/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    const deletePost = (postid) => {
        const answer = window.confirm("Are you sure that you want to delete this post?")
        if (answer) {
            fetch(`/deletepost/${postid}`, {
                method: "delete",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                }
            }).then(res => res.json())
                .then(result => {
                    console.log(result)
                    const newData = data.filter(item => {
                        return item._id !== result._id

                    })
                    setData(newData)
                    window.location.reload(false);
                })
        }

    }

    const showModal = (item) => {
        console.log("modalData", item)
        setModalPost(item);
        const newAuthor = item.postedBy;
        setAuthor(newAuthor)
        const newLikes = item.likes;
        setLikes(newLikes)
        const newDate = item.updatedAt.slice(0, 10);
        setDate(newDate)
        const newComments = item.comments;
        setComments(newComments)

        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalPost({})
        setModalOpen(!modalOpen);
    };

    return (
        <Section>
            {/***********This is modal window *************/}
            <div className={modalOpen ? "modal active" : "modal"} >
                <figure onClick={closeModal} />
                <article>
                    <div className="modal-left-column">
                        <img className="modal-post-image" src={modalPost.photo} />
                    </div>
                    <div className="modal-right-column">
                        <div className="post-header">
                            <img className="author__image" src={state ? state.profile_pic : ""}></img>
                            <p>by <b>{state ? state.name : "loading"}</b></p>
                        </div>
                        <h1 className="modalPost-title">{modalPost.title}</h1>
                        <p className="modalPost-date">updated at: {date}</p>
                        {/* {likes.includes(state._id)
                            ?
                            <i style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                                <AiFillHeart
                                    onClick={() => { unlikePost(modalPost._id) }}
                                />
                            </i>
                            :
                            <i style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                                <AiOutlineHeart
                                    onClick={() => { likePost(modalPost._id) }} />
                            </i>

                        } */}
                        <p className="modalPost-body">{modalPost.body}</p>
                        <h3 style={{ marginBottom: "1rem" }}>Comments</h3>
                        {
                            comments.map(record => {
                                return (
                                    <div className="comment-container" key={record._id}>
                                        <h4 style={{ marginRight: "1rem" }}>{record.postedBy.name}</h4>
                                        <p >{record.text}</p>
                                    </div>

                                )
                            })
                        }
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            makeComment(e.target[0].value, modalPost._id)
                        }}>
                            <input className="comment-input" type="text" placeholder="add a comment" />
                        </form>


                    </div>
                </article>
            </div>
            <div className="column-left">
                <img
                    className="profile-image"
                    src={state ? state.profile_pic : ""}
                />
                <div className="profileInfo-container">
                    <div className="name-container">
                        <h1 className="profile-name">{state ? state.name : "loading"}</h1>
                        <div className="photoUploader-container">
                            <label htmlFor="attach-file" className="profile-setting">
                                <AiFillSetting className="setting-btn" />
                            </label>
                            <input
                                id="attach-file"
                                type="file"
                                accept="image/*"
                                onChange={(e) => updatePhoto(e.target.files[0])}
                                style={{
                                    opacity: 0,
                                }}
                            />
                        </div>
                    </div>
                    <div className="info">
                        <h3><IoNewspaperOutline /> {mypics.length} Posts</h3>
                        <h3><IoPeopleCircleOutline /> {state ? state.followers.length : "0"} Followers</h3>
                        <h3><IoPeopleCircleSharp /> {state ? state.following.length : "0"} Following</h3>
                    </div>
                    <h3 className="info"><MdEmail /> {state ? state.email : "loading"}</h3>
                </div>
            </div>
            <div className="column-right">
                {mypics.length > 0 ?
                    <ImageGrid>
                        {
                            mypics.map((item, index) => {
                                return (
                                    <div key={index} className="image-container">
                                        <img className="post__image" src={item.photo} />
                                        <div className="overlay__image">
                                            <div className="overlay__box">
                                                <div className="overlay__userName">
                                                    <img className="author__image" src={state.profile_pic}></img>
                                                    <p>by <b>{state.name}</b></p>
                                                </div>
                                                <h1 className="post-title">{item.title}</h1>
                                                <h3 className="likes__box"><AiFillHeart /> {item.likes.length}</h3>
                                                <h2 className="read-btn" onClick={() => showModal(item)}>Read Detail</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ImageGrid>
                    :
                    <div className="create__message">
                        <h1>No posts </h1>
                        <Link className="create__btn" to="/create" >
                            <h1>Click Here to Create</h1>
                        </Link>
                    </div>
                }
            </div>


        </Section>
    )
}

export default MyProfile
