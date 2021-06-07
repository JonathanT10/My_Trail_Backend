import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/wall.css';
import jwtDecode from 'jwt-decode';
import {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const NewPost = (props)=>{
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);

    const [ post, setPost] = useState('');
    const [ location, setLocation] = useState('');
    const [ mood, setMood] = useState('');
    const [ rating, setRating] = useState('');

    const postChange = (event) => {
        setPost(event.target.value);
    }

    const locationChange = (event) => {
        setLocation(event.target.value);
    }

    const moodChange = (event) => {
        setMood(event.target.value);
    }

    const ratingChange = (event) => {
        setRating(event.target.value);
    }

    const handleClick = async (event) => {
        event.preventDefault();
        postPosting()}

    const postPosting = async ()=> {
       await axios
            .post(`http://localhost:5000/api/posts/`,  { headers:  {Authorization : 'Bearer ' + jwt}});
         
                window.location = '/profile';
            };
    


    return(
        <Container fluid>
            <div className="formStyle">
            <Row >
                <Form onSubmit={(event)=>handleClick(event)}>
                <Form.Group>
                    <Row>
                        <Form.Label>New Post</Form.Label>
                        <Form.Control type="post" placeholder="New Post"onChange={postChange}/>
                    </Row>
                    <Row>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="location" placeholder="Location"onChange={locationChange}/>
                    </Row>
                    <Row>
                        <Form.Label>Mood</Form.Label>
                        <Form.Control type="mood" placeholder="Mood"onChange={moodChange}/>                    
                    </Row>    
                    <Row>                        
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="rating" placeholder="Rating"onChange={ratingChange}/> 
                    </Row>
                    <Row className="formButton">
                        <Button className="btn btn-success btn-md float-right" variant="primary" type="submit">
                            Submit New Post
                        </Button>
                    </Row>
                </Form.Group>
                </Form>
            </Row>
         </div>
        </Container>
    )
}

export default NewPost;