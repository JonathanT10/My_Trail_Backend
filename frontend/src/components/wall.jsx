import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/wall.css';

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
        <Container fluid>
            <Row className="postStyle">
                <Post />
            </Row>
            <Row className="newPostStyle">                
                <NewPost/>
            </Row>
        </Container>
    )
}

export default Wall;