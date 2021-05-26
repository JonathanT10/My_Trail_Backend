import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';

const Wall = (props)=>{
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =()=>{
        const newComment={
        }
        props.addNewComment(newComment);
        setText('');
    }

    return(
        <div>
            <Post />
            <NewPost />
        </div>
    )
}

export default Wall;