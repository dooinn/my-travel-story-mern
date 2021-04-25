import React, { useState, useEffect, useContext } from 'react'
import { Section, ImageGrid } from '../styles/ExploreElements'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import exploreIcon from '../assets/exploreIcon.png'


const Explore = () => {

    const [data, setData] = useState([])
    const [date, setDate] = useState('')
    const [modalPost, setModalPost] = useState({})
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const [likes, setLikes] = useState([])
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // setLoading(false)
                console.log(result)
                setData(result.posts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
            <div className="section-header">
                <img className="icon-image" src={exploreIcon} alt="explore icon"></img>
                <div className="hero-text-container">
                    <h1 className="hero-text">Explore other</h1>
                    <h1 className="hero-text">Travellers' Diaries</h1>
                    <h2 className="hero-subText">Read & Get Inspired!</h2>
                </div>
            </div>

            {/***********This is modal window *************/}
            <div className={modalOpen ? "modal active" : "modal"} >
                <figure onClick={closeModal} />
                <article>
                    <div className="modal-left-column">
                        <img className="modal-post-image" src={modalPost.photo} />
                    </div>
                    <div className="modal-right-column">
                        <div className="post-header">
                            <img className="author__image" src={author.profile_pic}></img>
                            <p>by <b>{author.name}</b></p>
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
            {/********** Body Part **********/}
            <div className="section-body">
                <ImageGrid>

                    {
                        data.map(item => {
                            return (
                                <div key={item._id} className="image-container">
                                    <img className="post__image" src={item.photo} />
                                    <div className="overlay__image">
                                        <div className="overlay__box">
                                            <div className="overlay__userName">
                                                <img className="author__image" src={item.postedBy.profile_pic}></img>
                                                <p>by <b>{item.postedBy.name}</b></p>
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

            </div>

        </Section>
    )
}

export default Explore
