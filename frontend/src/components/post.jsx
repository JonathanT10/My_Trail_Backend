import { useState, useEffect, useRef } from "react";
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
// import { post } from "../../../routes/user";


const Post = (props) => {

  const [posting, setPosting] = useState();
  const jwt = localStorage.getItem('token');
  const userObject = jwtDecode(jwt);

  const authUser = async ()=>{
    const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
    return user;
}

  const user = authUser();

  const uploadedImage = useRef(props.img);

  const posts = async ()=>{
      user.friendsList.map(item => {
      const posting = axios.get(`http://localhost:5000/api/post/${item}`, {headers: {Authorization : 'Bearer' + jwt}})
      console.log('post posting data:' , posting.data);
      return posting;
  });}
  
  
  const logOut = () => {
      localStorage.removeItem('token');
      window.location = '/';
  }

  return (
    <Container fluid className="postStyle">
      <Row className="topRow">
        <Col sm={8}>
          <Row className="textBody">
            <TextBody props = {posting}/>
          </Row>
          <Row className="bottomRow">
            <Col sm={2} className="LD">
              <LD props={user.LD}/>
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
          <img ref={uploadedImage} alt="" />Profile Image Here
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
