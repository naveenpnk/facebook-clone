import {RiVideoAddFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import {BiPlus} from 'react-icons/bi'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'


const RightBody = () => {
  return (
    <div className='left-body'>
      <div className="contacts">
        <div className="contact-header">
          <div className="contact-title">Contacts</div>
          <div className="contact-icons">
            <RiVideoAddFill className='c-icon'/>
            <BsSearch className='c-icon'/>
            <HiOutlineDotsHorizontal className='c-icon'/>
          </div>
        </div>
        <div className="contact-body">
          <div className="profile">
              <img className='pro-img' src="https://images.pexels.com/photos/15105010/pexels-photo-15105010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className='pro-text'>Mike</div>
          </div>
          <div className="profile">
              <img className='pro-img' src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className='pro-text'>Jimmy</div>
          </div>
          <div className="profile">
              <img className='pro-img' src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className='pro-text'>Victorya</div>
          </div>
        </div>

        <hr style={{ borderTop: "2px solid #c7c7c7", marginLeft: "10px"}}/>

        <div className="groups">
          <div className="group-header">
            <div className="contact-title">Group Conversation</div>
          </div>
          <div className="group-body">
            <div className="profile">
                <div className='pro-imgcon'>
                  <img className='pro-img' src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <div className='online'></div>
                </div>
                <div className='pro-text'>Happy friends</div>
            </div>
            <div className="profile">
                <div className='pro-imgcon'>
                  <img className='pro-img' src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <div className='online'></div>
                </div>
                <div className='pro-text'>Health Team</div>
            </div>
            <div className="profile">
                <div className='pro-imgcon'>
                  <img className='pro-img' src="https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <div className='online'></div>
                </div>
                <div className='pro-text'>Lovely Family</div>
            </div>
            <div className="profile">
              <div id='arrow'>
                  <BiPlus/>
              </div>
              <div className='pro-text'>Create New Group</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBody