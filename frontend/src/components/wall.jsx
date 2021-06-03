// import {useState} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
// import { useState } from "react";



const Wall = (props)=>{
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);

    const authUser = async ()=>{
        console.log("auth trigger test")
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
        console.log(user.data);
        return user;
    }

    const user = authUser();

    
    const logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    }
 
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

    return(
        <Container fluid>
            <Row className="profileButton">   
                <Button className="btn btn-success btn-md">
                        Profile
                </Button>         
                <Button className="btn btn-success btn-md" onClick={()=> logOut()}>
                        Log Out
                </Button>  
            </Row>               
                <Row className="postStyle">
                    <Post />
                </Row>
                <Row className="newPostStyle">
                    <NewPost />
                </Row>
        </Container>
    )
}

export default Wall;