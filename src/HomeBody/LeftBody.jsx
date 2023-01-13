import {BsFillBookmarkFill} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {HiUserGroup} from 'react-icons/hi'
import {AiTwotoneFlag} from 'react-icons/ai'
import {RxCountdownTimer} from 'react-icons/rx'
import {IoIosArrowDown} from 'react-icons/io'
import {FaStore, FaFacebookMessenger, FaUserFriends} from 'react-icons/fa'


const LeftBody = () => {
  return (
    <div className="left-body">
        <div className="profile">
            <img className='pro-img' src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="dp" />
            <div className='pro-text'>John</div>
        </div>
        <div className="profile">
            <FaUserFriends className='pro-icon'/>
            <div className='pro-text'>Friends</div>
        </div>
        <div className="profile">
            <TbCalendarTime className='pro-icon'/>
            <div className='pro-text'>Most Recent</div>
        </div>
        <div className="profile">
            <HiUserGroup className='pro-icon'/>
            <div className='pro-text'>Groups</div>
        </div>
        <div className="profile">
            <FaStore className='pro-icon'/>
            <div className='pro-text'>Market Place</div>
        </div>
        <div className="profile">
            <FaFacebookMessenger className='pro-icon'/>
            <div className='pro-text'>Messnger</div>
        </div>
        <div className="profile">
            <RxCountdownTimer className='pro-icon'/>
            <div className='pro-text'>Memories</div>
        </div>
        <div className="profile">
            <BsFillBookmarkFill className='pro-icon'/>
            <div className='pro-text'>Saved</div>
        </div>
        <div className="profile">
            <AiTwotoneFlag className='pro-icon'/>
            <div className='pro-text'>Pages</div>
        </div>
        <div className="profile">
            <AiTwotoneFlag className='pro-icon'/>
            <div className='pro-text'>Pages</div>
        </div>
        <div className="profile">
            <div id='arrow'>
                <IoIosArrowDown/>
            </div>
            <div className='pro-text'>See more</div>
        </div>
        <div className="footer">
            <div className='links'>
                <a href='/'>Privacy</a> · 
                <a href='/'> Terms</a> · 
                <a href='/'> Advertising</a> · 
                <a href='/'> Ad choices</a> · 
                <a href='/'> Cookies</a> · <br />
                <a href='/'> More</a> · 
                <span> Meta © {new Date().getFullYear()}</span>            
            </div>
        </div>
    </div>
  )
}

export default LeftBody