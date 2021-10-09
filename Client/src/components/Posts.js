import React from 'react'
import { FaRegCheckCircle, FaComment, FaRetweet, FaHeart, FaLeaf } from 'react-icons/fa'

const Posts = () => {
     return (
          <div className='posts1'>
               <div className="posts1__first">
                    <div className="posts1__first__img">
                         <img src="/images/pp.jfif" alt="profile image" />
                    </div>
                    <div className="posts1_first_name"><strong>Anish Kumar</strong> <FaRegCheckCircle className='verify' /></div>
                    <div className="posts1__first__username">@anishkumar <span>6 min</span></div>
               </div>

               <div className="posts1__details">
                    <div className="posts1__details__msg">
                         djafkjld;afdjafjda
                         dfjdfdfdjklafjdlafdajfdlfadfa
                         dfafkdfajdjl;fajsdj;jsfj;aslfjsa;flsdfjsldfsl
                    </div>
                    <div className="posts1__details__img">
                         <img src='/images/1.jpg' alt='post image' />
                    </div>
                    <div className="reactions">
                         <span><FaComment className='re' />44</span>
                         <span><FaRetweet className='re' />444</span>
                         <span><FaHeart className='re' />44</span>
                         <span><FaLeaf className='re' />44</span>

                    </div>
               </div>
          </div>
     )
}

export default Posts
