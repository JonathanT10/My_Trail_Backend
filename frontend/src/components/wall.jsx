// import {useState} from 'react';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
// import { useState } from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Wall = () =>{
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);


    const authUser = ()=>{
        console.log("auth trigger test")
        const user = axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
        console.log(user);
        return user;
    }

    const user = authUser();
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
            profile link here              
                <Row className="postStyle">
                    <Post props={user}/>
                </Row>
                <Row className="newPostStyle">
                    <NewPost props={user} />
                </Row>
        </Container>
    )
}

export default Wall;