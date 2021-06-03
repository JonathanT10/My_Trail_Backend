import {useState} from 'react';
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
    const [currUser, setCurrUser] = useState();
    const [userObject, setUserObject] = useState();
    const jwt = localStorage.getItem('token');
    setCurrUser(jwtDecode(jwt));
    const authUser = async() => {
        console.log("auth trigger test");
      const  response =  await axios.create.get(`http://localhost:5000/api/user/${currUser._id}`)
        console.log(response);
        setUserObject(response);
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

    console.log(userObject);
    

    


    return(
        <Container fluid>
            <Row className="profileButton">   
                <Button className="btn btn-success btn-md">
                        Profile
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