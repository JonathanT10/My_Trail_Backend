import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/newPost.css';

const NewPost = (props)=>{
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
        <Container fluid className="newPostStyle">
            <Row className="textBody">
                New Post
            </Row>
        </Container>
    )
}

export default NewPost;