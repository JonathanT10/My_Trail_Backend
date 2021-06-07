import { useState, useEffect, useRef } from "react"
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
import '../components/css/post.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import ProfileImage from './subComponents/profileImageMini';
import postA from './wall';


const Post = (props) => {
    
  const jwt = localStorage.getItem('token');
  const userObject = jwtDecode(jwt);
  const [user, setUser] = useState();
  const [uploadedImage, setUploadedImage] = useState([]);
  const [posting, setPosting] = useState();
  const [postAll, setPostAll] = useState([]);
  const userId = useRef("");

  const authUser = async (userObject, jwt)=>{
      const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}});
      setUser(user.data);  
      setUploadedImage("http://localhost:5000/" + user.data.img);
      // console.log(uploadedImage);
  }

  useEffect(() => {
      const jwt = localStorage.getItem('token');
      const userObject = jwtDecode(jwt);
      authUser(userObject, jwt);
      userId.current = userObject;
  },[user]);

  // this axios call should get all posts from the database that match the user's ID, as well as all their friends postings. 
  // from here, the individual information is sent to each sub component to display on the page in the correct places.

  const posts = async ()=>{
      user.friendsList.map(item => {
      const posting = axios.get(`http://localhost:5000/api/posts/${item}`, {headers: {Authorization : 'Bearer' + jwt}})
      // console.log('post posting data:' , posting.data);
      return posting;
  });}

 

  const clickLikes = async (posting) => {
    posting.likes = posting.likes +1;
  // console.log("likes", posting.likes);
  const response = await axios .put(`http://localhost:5000/api/posts/${posting._id}`,{headers: {Authorization : 'Bearer' + jwt}},
  {likes: posting.likes, dislikes: posting.dislikes});
  }

  
  
  
  const logOut = () => {
      localStorage.removeItem('token');
      window.location = '/';
  }



  return (
    <Container fluid className="postStyle">
      <Row className="topRow">
        <Col sm={8}>
          <Row className="textBody">
            <TextBody props = {postA()}{...postAll.map(postAl =>{
             <> {postAl.text}</>
            })}/>
            
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
              <p onClick={()=> clickLikes(posting)}>Like</p>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="profileColumn">         
          <ProfileImage className="profileImageBox" url={uploadedImage}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
