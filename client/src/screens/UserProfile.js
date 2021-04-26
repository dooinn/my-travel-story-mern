import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserState'
import { Link, useParams } from 'react-router-dom'
import { Section } from '../styles/UserProfileElements'
import CircularProgress from '@material-ui/core/CircularProgress';





const UserProfile = () => {

    const { userid } = useParams()
    const { state, dispatch } = useContext(UserContext)
    const [userProfile, setProfile] = useState(null)
    const [user, setUser] = useState('')
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [profileImg, setProfileImg] = useState('')
    const [showfollow, setShowFollow] = useState(state ? !state.following.includes(userid) : true)



    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log('profile', result)
                setProfile(result)


                // const newUser = result.user;
                // const newFollowers = result.user.followers
                // const newFollowing = result.user.following
                // const newProfileImg = result.user.profile_pic

                // setUser(newUser)
                // setFollowers(newFollowers)
                // setFollowing(newFollowing)
                // setProfileImg(newProfileImg)

            })
    }, [])





    const followUser = () => {
        fetch('/follow', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                followId: userid
            })
        }).then(res => res.json())
            .then(data => {

                dispatch({
                    type: "UPDATE",
                    payload: { following: data.following, followers: data.followers }
                })
                localStorage.setItem("user", JSON.stringify(data))
                setProfile((prevState) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: [...prevState.user.followers, data._id]
                        }
                    }
                })
                setShowFollow(false)
            })
    }


    const unfollowUser = () => {
        fetch('/unfollow', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                unfollowId: userid
            })

        }).then(res => res.json())
            .then(data => {

                dispatch({
                    type: "UPDATE",
                    payload: { following: data.following, followers: data.followers }
                })
                localStorage.setItem("user", JSON.stringify(data))

                setProfile((prevState) => {
                    const newFollower = prevState.user.followers.filter(item => item != data._id)
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: newFollower
                        }
                    }
                })
                setShowFollow(true)
            })



    }




    return (
        <div></div>

        // <d>

        //     <Section>
        //         {userProfile ?
        //             <div style={{ margin: "18px 0px", borderBottom: "1px solid grey" }}>
        //                 <div className="profile-container">
        //                     <div>
        //                         <img className="profile-image"
        //                             src={profileImg.profile_pic}
        //                         />
        //                     </div>
        //                     <div className="profile-info">
        //                         <div className="userName">
        //                             <h1>{user.name}</h1>
        //                             {showfollow ?
        //                                 <button className="follow__btn"
        //                                     onClick={() => followUser()}
        //                                 >Follow</button>
        //                                 :
        //                                 <button className="follow__btn"
        //                                     onClick={() => unfollowUser()}
        //                                 >UnFollow</button>
        //                             }
        //                         </div>
        //                         <div className="info" style={{ width: "80%" }}>
        //                             <h3>{userProfile.posts.length} posts</h3>
        //                             <h3>{followers.length} followers</h3>
        //                             <h3>{following.length} following</h3>
        //                         </div>
        //                         <h3 className="info">{user.email}</h3>
        //                     </div>
        //                 </div>
        //                 <div className="gallery__container">
        //                     {
        //                         userProfile.posts.map(item => {
        //                             return (
        //                                 <div className="thumbnail" key={item._id}>
        //                                     <Link to={"/post/" + item._id}>
        //                                         <img
        //                                             className="item"
        //                                             src={item.photo}
        //                                             alt={item.title}
        //                                             style={{ width: "100%" }}
        //                                         >
        //                                         </img>
        //                                     </Link>
        //                                     <h1>{item.title}</h1>
        //                                     <p>{item.body.slice(0, 100)}...</p>
        //                                 </div>

        //                             )
        //                         })
        //                     }
        //                 </div>
        //             </div>
        //             : <div className="loading-container">
        //                 <h1>Loading...</h1>
        //                 <CircularProgress disableShrink />
        //             </div>}
        //     </Section>
        // </d>
    )
}


export default UserProfile




// import React, { useEffect, useState, useContext } from 'react'
// import { UserContext } from '../context/UserState'
// import { Section, ImageGrid } from '../styles/UserProfileElements'
// import { AiFillSetting, AiFillHeart } from 'react-icons/ai'
// import { MdEmail } from 'react-icons/md'
// import { IoPeopleCircleOutline, IoPeopleCircleSharp, IoNewspaperOutline } from 'react-icons/io5'
// import { Link, useParams } from 'react-router-dom'

// const UserProfile = () => {



//     const [modalPost, setModalPost] = useState({})
//     const [modalOpen, setModalOpen] = useState(false);
//     const [comments, setComments] = useState([])
//     const [author, setAuthor] = useState({})
//     const [likes, setLikes] = useState([])
//     const [date, setDate] = useState('')
//     const [userProfile, setProfile] = useState(null)
//     const { userid } = useParams()
//     const { state, dispatch } = useContext(UserContext)
//     const [showfollow, setShowFollow] = useState(state ? !state.following.includes(userid) : true)


//     useEffect(() => {
//         fetch(`/user/${userid}`, {
//             headers: {
//                 "Authorization": "Bearer " + localStorage.getItem("jwt")
//             }
//         }).then(res => res.json())
//             .then(result => {
//                 console.log('user', result)
//                 setProfile(result)
//             })
//     }, [])


//     const followUser = () => {
//         fetch('/follow', {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + localStorage.getItem('jwt')
//             },
//             body: JSON.stringify({
//                 followId: userid
//             })
//         }).then(res => res.json())
//             .then(data => {

//                 dispatch({
//                     type: "UPDATE",
//                     payload: { following: data.following, followers: data.followers }
//                 })
//                 localStorage.setItem("user", JSON.stringify(data))
//                 setProfile((prevState) => {
//                     return {
//                         ...prevState,
//                         user: {
//                             ...prevState.user,
//                             followers: [...prevState.user.followers, data._id]
//                         }
//                     }
//                 })
//                 setShowFollow(false)
//             })
//     }


//     const unfollowUser = () => {
//         fetch('/unfollow', {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + localStorage.getItem('jwt')
//             },
//             body: JSON.stringify({
//                 unfollowId: userid
//             })

//         }).then(res => res.json())
//             .then(data => {

//                 dispatch({
//                     type: "UPDATE",
//                     payload: { following: data.following, followers: data.followers }
//                 })
//                 localStorage.setItem("user", JSON.stringify(data))

//                 setProfile((prevState) => {
//                     const newFollower = prevState.user.followers.filter(item => item != data._id)
//                     return {
//                         ...prevState,
//                         user: {
//                             ...prevState.user,
//                             followers: newFollower
//                         }
//                     }
//                 })
//                 setShowFollow(true)

//             })
//     }


//     const makeComment = (text, postId) => {
//         fetch('/comment', {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + localStorage.getItem("jwt")
//             },
//             body: JSON.stringify({
//                 postId,
//                 text
//             })
//         }).then(res => res.json())
//             .then(result => {
//                 console.log(result)
//                 const newData = userProfile.map(item => {
//                     if (item._id == result._id) {
//                         return result
//                     } else {
//                         return item
//                     }
//                 })
//                 setProfile(newData)
//             }).catch(err => {
//                 console.log(err)
//             })
//     }



//     const showModal = (item) => {
//         console.log("modalData", item)
//         setModalPost(item);
//         const newAuthor = item.postedBy;
//         setAuthor(newAuthor)
//         const newLikes = item.likes;
//         setLikes(newLikes)
//         const newDate = item.updatedAt.slice(0, 10);
//         setDate(newDate)
//         const newComments = item.comments;
//         setComments(newComments)

//         setModalOpen(!modalOpen);
//     };

//     const closeModal = () => {
//         setModalPost({})
//         setModalOpen(!modalOpen);
//     };

//     return (
//         <Section>
//             {/***********This is modal window *************/}
//             <div className={modalOpen ? "modal active" : "modal"} >
//                 <figure onClick={closeModal} />
//                 <article>
//                     <div className="modal-left-column">
//                         <img className="modal-post-image" src={modalPost.photo} />
//                     </div>
//                     <div className="modal-right-column">
//                         <div className="post-header">
//                             <img className="author__image" src={state ? state.profile_pic : ""}></img>
//                             <p>by <b>{state ? state.name : "loading"}</b></p>
//                         </div>
//                         <h1 className="modalPost-title">{modalPost.title}</h1>
//                         <p className="modalPost-date">updated at: {date}</p>
//                         {/* {likes.includes(state._id)
//                             ?
//                             <i style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
//                                 <AiFillHeart
//                                     onClick={() => { unlikePost(modalPost._id) }}
//                                 />
//                             </i>
//                             :
//                             <i style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
//                                 <AiOutlineHeart
//                                     onClick={() => { likePost(modalPost._id) }} />
//                             </i>

//                         } */}
//                         <p className="modalPost-body">{modalPost.body}</p>
//                         <h3 style={{ marginBottom: "1rem" }}>Comments</h3>
//                         {
//                             comments.map(record => {
//                                 return (
//                                     <div className="comment-container" key={record._id}>
//                                         <h4 style={{ marginRight: "1rem" }}>{record.postedBy.name}</h4>
//                                         <p >{record.text}</p>
//                                     </div>

//                                 )
//                             })
//                         }
//                         <form onSubmit={(e) => {
//                             e.preventDefault()
//                             makeComment(e.target[0].value, modalPost._id)
//                         }}>
//                             <input className="comment-input" type="text" placeholder="add a comment" />
//                         </form>


//                     </div>
//                 </article>
//             </div>
//             <div className="column-left">
//                 <img
//                     className="profile-image"
//                     src={state ? state.profile_pic : ""}
//                 />
//                 <div className="profileInfo-container">
//                     <div className="name-container">
//                         <h1 className="profile-name">{state ? state.name : "loading"}</h1>
//                         <div className="userName">
//                             {/* <h1>{userProfile.user.name}</h1> */}
//                             {showfollow ?
//                                 <button className="follow__btn"
//                                     onClick={() => followUser()}
//                                 >Follow</button>
//                                 :
//                                 <button className="follow__btn"
//                                     onClick={() => unfollowUser()}
//                                 >UnFollow</button>
//                             }
//                         </div>
//                     </div>
//                     <div className="info">
//                         <h3><IoNewspaperOutline /> {userProfile.posts.length} Posts</h3>
//                         <h3><IoPeopleCircleOutline /> {userProfile.user.followers.length} Followers</h3>
//                         <h3><IoPeopleCircleSharp /> {userProfile.user.following.length} Following</h3>
//                     </div>
//                     <h3 className="info"><MdEmail /> {userProfile.user.email}</h3>
//                 </div>
//             </div>
//             <div className="column-right">
//                 {userProfile.length > 0 ?
//                     <ImageGrid>
//                         {
//                             userProfile.posts.map((item, index) => {
//                                 return (
//                                     <div key={index} className="image-container">
//                                         <img className="post__image" src={item.photo} />
//                                         <div className="overlay__image">
//                                             <div className="overlay__box">
//                                                 <div className="overlay__userName">
//                                                     <img className="author__image" src={item.profile_pic}></img>
//                                                     <p>by <b>{item.name}</b></p>
//                                                 </div>
//                                                 <h1 className="post-title">{item.title}</h1>
//                                                 <h3 className="likes__box"><AiFillHeart /> {item.likes.length}</h3>
//                                                 <h2 className="read-btn" onClick={() => showModal(item)}>Read Detail</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </ImageGrid>
//                     :
//                     <div className="create__message">
//                         <h1>No posts </h1>
//                         <Link to="/create" >
//                             <h1 className="create__btn">Click Here to Create</h1>
//                         </Link>
//                     </div>
//                 }
//             </div>


//         </Section>
//     )
// }

// export default UserProfile
