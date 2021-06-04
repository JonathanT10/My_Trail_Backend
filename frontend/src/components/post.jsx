// import { useState } from "react";
// import Img from "./subComponents/img";
import LD from "./subComponents/LD";
import Location from "./subComponents/location";
import Mood from "./subComponents/mood";
import TextBody from "./subComponents/textBody";
import Reply from "./subComponents/reply";
import Rating from "./subComponents/rating";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import '../components/css/post.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


const Post = (props) => {

  const jwt = localStorage.getItem('token');
  const userObject = jwtDecode(jwt);

  const authUser = async ()=>{
    console.log("auth trigger test")
    const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
    console.log(user.data);
    return user;
}

const user = authUser();



  const posts = async ()=>{
      console.log("auth trigger test")
     const currfriend = user.friendsList.map(currfriend => {
      const posting = axios.get(`http://localhost:5000/api/post/${currfriend}`, {headers: {Authorization : 'Bearer' + jwt}})
      console.log(posting.data);
      return posting;
  });}

  const posting = posts();

  
  const logOut = () => {
      localStorage.removeItem('token');
      window.location = '/';
  }

  // const [text, setText] = useState("");

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  // const handleClick = () => {
  //   const newComment = {};
  //   props.addNewComment(newComment);
  //   setText("");
  // };

  return (
    <Container fluid className="postStyle">
      <Row className="topRow">
        <Col sm={8}>
          <Row className="textBody">
            <TextBody props = {posting}/>
          </Row>
          <Row className="bottomRow">
            <Col sm={2} className="LD">
              <LD />
            </Col>
            <Col sm={10} className="secondColumn">
              <Row className="miniRow">
                <Location />
              </Row>
              <Row className="miniRow">
                <Rating />
                <Mood />
              </Row>
              <Row className="miniRow">
                <Reply />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="profileColumn">
         Profile Image Here
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
