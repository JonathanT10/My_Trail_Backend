import { useState } from "react";
import Img from "./subComponents/img";
import LD from "./subComponents/LD";
import Location from "./subComponents/location";
import Mood from "./subComponents/mood";
import Profile from "./subComponents/profile";
import TextBody from "./subComponents/textBody";
import Reply from "./subComponents/reply";
import Rating from "./subComponents/rating";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../components/css/post.css';

const Post = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    const newComment = {};
    props.addNewComment(newComment);
    setText("");
  };

  return (
    <Container fluid className="postStyle">
      <Row className="topRow">
        <Col sm={8}>
          <Row className="textBody">
            <TextBody />
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
        <Col sm={2} className="imgColumn">
          <Img />
        </Col>
        <Col sm={2} className="profileColumn">
          <Profile />
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
