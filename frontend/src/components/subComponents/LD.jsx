// import {useState} from 'react';
import axios from 'axios';

const jwt = localStorage.getItem('token');

const clickLikes = async (posts) => {
    posts.likes = posts.likes +1;
  console.log("likes", posts.likes);
  const response = await axios .put(`http://localhost:5000/api/posts/${posts._id}`,{headers: {Authorization : 'Bearer' + jwt}},
  {likes: posts.likes, dislikes: posts.dislikes});
  }
  
  const clickDislikes = async (posts) => {
    posts.dislikes = posts.dislikes +1;
  console.log("likes", posts.dislikes);
  const response = await axios .put(`http://localhost:5000/api/posts/${posts._id}`,{headers: {Authorization : 'Bearer' + jwt}},
  {likes: posts.likes, dislikes: posts.dislikes});
  }

const LD = (props)=>{
    // const [text, setText] = useState('');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    //   };

    // const handleClick =()=>{
    //     const newComment={
    //     }
    //     props.addNewComment(newComment);
    //     setText('');
    // }

    console.log(props)

    return(
        <div>
            LD
        </div>
    )
}

export default LD;