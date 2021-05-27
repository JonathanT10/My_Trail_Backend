import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
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

    // post needs to map all posts matching logged in user, and everyone on friends list

    return(
        <Container fluid>
            <Table> 
                <Row className="postStyle">
                    Error: Please login or register to use MyTrail.
                </Row>
            </Table>
        </Container>
    )
}

export default Wall;