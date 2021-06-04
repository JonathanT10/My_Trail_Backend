// import {useState} from 'react';
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

    const handleClick = (event) => {
        event.preventDefault();
        console.log(post);
        axios
            .post(`http://localhost:5000/api/posts/`, {text: post, likes: 0, dislikes: 0, location: location, mood: mood, rating: rating,  userId: user._id}, {headers: {Authorization : 'Bearer' + jwt}})
            .then(response => {
                console.log(response);
                window.location = '/';
            });
    }


    return(
        <Container fluid className="newPostStyle">
            <Row className="textBody">
                <Form onSubmit={(event)=>handleClick(event)}>
                <Form.Group>
                        <Form.Label className="loginText">New Post</Form.Label>
                            <Form.Control type="post" placeholder="New Post"onChange={postChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="loginText">Location</Form.Label>
                            <Form.Control type="location" placeholder="Location"onChange={locationChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="loginText">Mood</Form.Label>
                            <Form.Control type="mood" placeholder="Mood"onChange={moodChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="loginText">Rating</Form.Label>
                            <Form.Control type="rating" placeholder="Rating"onChange={ratingChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Row>
                <Button className="btn btn-success btn-md float-right" variant="primary" type="submit">
                    Submit New Post
                </Button>
            </Row>
                </Form>
            </Row>
         
        </Container>
    )
}

export default NewPost;