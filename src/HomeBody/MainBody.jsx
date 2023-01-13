import {HiArrowRight, HiOutlineDotsHorizontal} from 'react-icons/hi'
import {HiOutlineGif} from 'react-icons/hi2'
import {GoSmiley} from 'react-icons/go'
import {TbSticker} from 'react-icons/tb'
import {BsFillFlagFill, BsFillCaretDownFill, BsCamera, BsArrowReturnRight, BsFillPeopleFill} from 'react-icons/bs'
import {MdPublic, MdClose, MdOutlineClose, MdLocationOn} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'
import {RiVideoAddFill, RiShareForwardLine} from 'react-icons/ri'
import {FaVideo, FaPhotoVideo, FaRegCommentAlt, FaUserTag} from 'react-icons/fa'
import { VscAccount, VscSmiley } from "react-icons/vsc";

import './HomeBody.css'
import { useState } from 'react'

const MainBody = () => {
   
    const [style, setStyle] = useState("view-comment");
    function showComments() {
        setStyle("activate-view")
    }

  return (
    <div className='main-body'>
        {/* <div id='overlay' className='overlay'></div> */}
        <div className="story-container">
            <div id="story">
                <div id="img">
                    <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                </div>
                <div id='story-title'>Create Story</div>
                <button id='add-btn'>+</button>
            </div>
            <div className="story">
                <div className="img">
                    <img src="https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                </div>
                <div className='story-title'>Rose</div>
                <button className='add-btn'>
                    <img src="https://images.pexels.com/photos/9535869/pexels-photo-9535869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </button>
            </div>
            <div className="story">
                <div className="img">
                    <img src="https://images.pexels.com/photos/14527986/pexels-photo-14527986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                </div>
                <div className='story-title'>Max</div>
                <button className='add-btn'>
                    <img src="https://images.pexels.com/photos/9535869/pexels-photo-9535869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </button>
            </div>
            <div className="story">
                <div className="img">
                    <img src="https://images.pexels.com/photos/14336506/pexels-photo-14336506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                </div>
                <div className='story-title'>Julie</div>
                <button className='add-btn'>
                    <img src="https://images.pexels.com/photos/9535869/pexels-photo-9535869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </button>
            </div>
            <div className="story">
                <div className="img">
                    <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                </div>
                <div className='story-title'>Crish</div>
                <button className='add-btn'>
                    <img src="https://images.pexels.com/photos/9535869/pexels-photo-9535869.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </button>
            </div>
            <a href="/story" id='story-arrow'>
                <HiArrowRight/>
            </a>
        </div>

        <div className="input-container">
            <div className="input-msg">
                <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="input">What's in your mind?</div>
            </div>
            {/* <div className='create-post'>
                <div className="create-header">
                    <div className="create-title">Create Post</div>
                    <div className="close">
                        <MdOutlineClose/>
                    </div>
                </div>
                <hr style={{color: "#d4d4d4"}}/>
                <div className="create-body">
                    <div className="create-profile">
                        <img className='pro-img' src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                        <div className='pro-text'>
                            <div className="pro-name">John</div>
                            <button className='pro-select'>
                                <BsFillPeopleFill/>
                                Friends
                                <BsFillCaretDownFill/>
                            </button>
                        </div>
                    </div>
                    <textarea className="create-text" placeholder="What's on your mind?"></textarea>
                    <div className="create-add">
                        <div className="create-addText">Add to your post</div>
                        <div className="create-addIcons">
                            <FaPhotoVideo className='addIcon'/>
                            <FaUserTag className='addIcon'/>
                            <GoSmiley className='addIcon'/>
                            <MdLocationOn className='addIcon'/>
                            <BsFillFlagFill className='addIcon'/>
                            <HiOutlineDotsHorizontal className='addIcon'/>
                        </div>
                    </div>
                    <button className="create-postBtn">Post</button>
                </div>
            </div> */}

            <hr style={{color: "#e9e6e6", height: 2}}/>

            <div className="input-type">
                <div className="type">
                    <FaVideo style={{color: "#f12f2f", width:"26px", height: "26px"}}/>
                    <span>Live video</span>
                </div>
                <div className="type">
                    <FaPhotoVideo style={{color: "#16bc04", width:"26px", height: "26px"}}/>
                    <span>Photo/video</span>
                </div>
                <div className="type">
                    <GoSmiley style={{color: "rgb(244, 192, 6)", width:"26px", height: "26px"}}/>
                    <span>Feeling/activity</span>
                </div>
            </div>
        </div>

        <div className="create-room">
            <div className="room">
                <RiVideoAddFill style={{color: "#ca35ec", width:"24px", height: "24px"}}/>
                <span>Create Room</span>
            </div>
        </div>
        <div className="post-container">
            <div className="post-header">
                <div className="userInfo">
                    <img className='userdp' src="https://images.pexels.com/photos/14846065/pexels-photo-14846065.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
                    <div>
                        <div className="username">
                            <span>Jenie</span>
                        </div>
                        <div className="time">
                            <span id='hrs'>1h </span> . 
                            <span>
                                <MdPublic style={{fontSize: "16px"}}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='clear-post'>
                    <HiOutlineDotsHorizontal className='post-icon'/>
                    <MdClose className='post-icon'/>
                </div>
            </div>
            <div className="post-body">
                <div className="discription">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="post-img">
                    <img src="https://images.pexels.com/photos/10979720/pexels-photo-10979720.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
                <div className="count-container">
                    <div className="like-count">
                        <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-like.svg" alt="like" />
                        <span>100K</span>
                    </div>
                    <div className="share-count">
                        <a href="/comments">4.2K comments</a>
                        <a href="/shares">1K shares</a>
                    </div>
                </div>
            </div>
            <hr style={{margin: "0px 15px", color:"#c1c1c1"}}/>
            <div className="post-footer">
                <div className="expression">
                    <AiOutlineLike style={{fontSize:"24px"}}/>
                    Like
                </div>
                <div className="expression" onClick={showComments}>
                    <FaRegCommentAlt style={{fontSize:"20px"}}/>
                    Comment
                </div>
                <div className="expression">
                    <RiShareForwardLine style={{fontSize:"24px"}}/>
                    Share
                </div>
            </div>
            <hr style={{margin: "0px 15px", color:"#c1c1c1"}}/>
            <div className={style}>
                <div className="view-option">
                    <button>
                        Most relevant
                        <BsFillCaretDownFill/>
                    </button>
                </div>
                <div className="add-comment">
                    <img style={{width: "42px", height: "42px", borderRadius:"100%",cursor: "pointer"}} src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <div className="comment-input">
                        <input type="text" placeholder="Write a comment" />
                        <div className='input-icons'>
                            <VscAccount className='c-icon'/>
                            <VscSmiley className='c-icon'/>
                            <BsCamera className='c-icon'/>
                            <HiOutlineGif className='c-icon'/>
                            <TbSticker className='c-icon'/>
                        </div>
                    </div>
                </div>
                <div className="comment-section">
                    <img style={{width: "42px", height: "42px", borderRadius:"100%",cursor: "pointer"}} src="https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <div className="comment">
                        <div className="text">
                            <span>Randy</span>
                            <p>This pic looks nice!</p>
                        </div>
                        <div className="comment-react">
                            <span>Like</span>
                            <span>Reply</span>
                            <span>10 h</span>
                        </div>
                        <div className="reply">
                            <BsArrowReturnRight style={{fontSize: "16px"}}/>
                            <span>2 replies</span>
                        </div>
                    </div>
                </div>
                <div className="more-comment">
                    <span id='more'>View more Comments</span>
                    <span>1 of 20</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody