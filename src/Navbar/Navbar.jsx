import {BsFacebook} from 'react-icons/bs'
import {MdOndemandVideo, MdNotificationsActive} from 'react-icons/md'
import {FaStore, FaFacebookMessenger} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {CgMenuGridO} from 'react-icons/cg'
import {AiOutlineSearch,AiFillHome} from 'react-icons/ai'

import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="left">
            <div className="logo">
                <BsFacebook style={{color: "#006AFF",fontSize: 40}}/>
            </div>
            <div className="search">
                <AiOutlineSearch style={{color: "#5c5b5b",fontSize: 20}}/>
                <input type="search" placeholder='Search Facebook'/>
            </div>
        </div>
        <div className="center">
            <div className='icon'>
                <AiFillHome/>
            </div>
            <div className='icon'>
                <MdOndemandVideo />
            </div>
            <div className='icon'>
                <FaStore />
            </div>
            <div className='icon'>
                <HiUserGroup />
            </div>
            <div className='icon'>
                <IoGameController />
            </div>
        </div>
        <div className="right">
            <div className="info-icon">
                <CgMenuGridO style={{color:"#000000",fontSize: "1.4rem"}}/>
            </div>
            <div className="info-icon">
                <FaFacebookMessenger style={{color:"#000000",fontSize: "1.4rem"}}/>
            </div>
            <div className="info-icon">
                <MdNotificationsActive style={{color:"#000000",fontSize: "1.4rem"}}/>
            </div>
            <div className="info-icon" id='dp'>
                <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
            </div>
        </div>
    </div>
  )
}

export default Navbar