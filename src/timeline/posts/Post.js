import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { BookmarkBorder, ChatBubbleOutline, Comment, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material'

function Post({user,userImage, postImage, likes , timestamp }){
 

  return (
    <div className='post'>
     <div className="post_header">
        <div className="post_headerAuthor">
            {/* <Avatar className='postIcon Avatar'>{user.charAt(0).toUpperCase()}</Avatar> */}
            <Avatar className='postIcon postAvatar'>
            <img src={userImage} alt={user} />
          </Avatar>
            {user}  {" "}
            <span className='post_dot'></span>
            <span className="timestampSpan">{timestamp}</span>
        </div>
        <MoreHoriz className='postIcon'/>
     </div>
     <div className="post_img">
        <img src={postImage} alt="" />
     </div>
     <div className="post_footer">
        <div className="post_footerIcons">
            <div className="post_IconsMain">
                <FavoriteBorder className='postIcon' />
                <Comment className='postIcon comment_icon'/>
                <Telegram className='postIcon'/>
            </div>
            <div className="post_iconSave">
                <BookmarkBorder className='postIcon'/>
            </div>
        </div>
        {likes} likes
     </div>
    </div>
  )
}

export default Post
