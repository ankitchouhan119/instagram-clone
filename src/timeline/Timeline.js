import React, { useState } from 'react'
import Suggestions from './Suggestions'
import "./Timeline.css";
import Post from './posts/Post';
import { Avatar } from '@mui/material'

function Timeline({user,userImage, postImage, likes , timestamp }) {
  const [posts, setPosts] = useState([
    {
      user: "rvcjinsta",
      userImage:"https://pbs.twimg.com/profile_images/1354876239685664770/6AI7Jhfg_400x400.jpg",
      postImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D",
      likes: "14,421",
      timestamp: "  5 h",
    },
    {
      user: "students.facts",
      userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxH1N_tKCXQSxkz0qepEco5YL4hFE9z-1Fqizr1DNeyZHWt_nyLFieSnNf8Bu37A3r2xQ&usqp=CAU",
      postImage: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg",
      likes: "40,541",
      timestamp: "  15 h",
    },
    {
      user: "mr.ankiit_",
      userImage:"https://i.pinimg.com/1200x/33/a1/1e/33a11ec7801981f093f10698e251f954.jpg",
      postImage: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
      likes: 321,
      timestamp: "  1 d",
    },
    {
      user: "school.days_",
      userImage:"https://cdn4.vectorstock.com/i/1000x1000/50/28/school-days-lettering-for-banner-design-vector-21635028.jpg",
      postImage: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      likes: 425,
      timestamp: "  12 h",
    },
    {
      user: "beauty_tips_",
      userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbZUQVJ51RemY2_LExITcpqhM3XOfN6-PbV41unPhqCNWdUxtEey0nVOz3gLm60RegNM&usqp=CAU",
      postImage: "https://photoscissors.com/images/samples/3-before.jpg",
      likes: 841,
      timestamp: "2 d",
    },
  ])
  return (
    <div className='timeline'>
        <div className="timeline_left">
          <div className="nav">
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg' alt={user} />
          </Avatar>
          <Avatar className='postIcon postAvatar navAvatar'>
            <img src='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt={user} />
          </Avatar>
          </div>
          <div className="timeline_posts">
            {
              posts.map((post) => (
                <Post user={post.user} userImage={post.userImage} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
              ))
            }
          </div>
        </div>
        <div className="timeline_right">
            <Suggestions/>
        </div>
     
    </div>
  )
}

export default Timeline
