// import {useState} from 'react';

const AboutMe = (props)=>{
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

    return(
        <>
            aboutme text{props.aboutMe}
        </>
    )
}

export default AboutMe;