import {useState} from 'react';
import Img from './subComponents/img';
import LD from './subComponents/LD';
import Location from './subComponents/location';
import Mood from './subComponents/mood';
import Profile from './subComponents/profile';
import TextBody from './subComponents/textBody';
import Reply from './subComponents/reply';
import Rating from './subComponents/rating';

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
            <Img />
            <LD />
            <Location />
            <Mood />
            <Profile />
            <TextBody />
            <Reply />
            <Rating />

        </div>
    )
}

export default Wall;