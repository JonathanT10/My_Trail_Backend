import {useState} from 'react';

const Reply = (props)=>{
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
            Reply
        </div>
    )
}

export default Reply;