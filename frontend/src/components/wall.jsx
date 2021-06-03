// import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './css/wall.css';

const Wall = (props)=>{
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

    // post needs to map all posts matching logged in user, and everyone on friends list
    console.log(props._id)

    return(
        <Container fluid>
            profile link here              
                <Row className="postStyle">
                    <Post props={props}/>
                </Row>
                <Row className="newPostStyle">
                    <NewPost props={props} />
                </Row>
        </Container>
    )
}

export default Wall;