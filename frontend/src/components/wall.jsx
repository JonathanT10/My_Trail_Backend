import {useState} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './css/wall.css';

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
            profile link here   {currUser}           
                <Row className="postStyle">
                    <Post props={authUser()}/>
                </Row>
                <Row className="newPostStyle">
                    <NewPost props={props} />
                </Row>
        </Container>
    )
}

export default Wall;