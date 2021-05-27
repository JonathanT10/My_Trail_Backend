import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            <Row>
                <Post />
            </Row>
            <Row>                
                <NewPost />
            </Row>
        </Container>
    )
}

export default Wall;