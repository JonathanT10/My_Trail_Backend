import { useState } from "react";
import Img from "./subComponents/img";
import LD from "./subComponents/LD";
import Location from "./subComponents/location";
import Mood from "./subComponents/mood";
import Profile from "./subComponents/profile";
import TextBody from "./subComponents/textBody";
import Reply from "./subComponents/reply";
import Rating from "./subComponents/rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Wall = (props) => {
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
    <Container fluid>
      <Row>
        <Col sm={8}>
          <Row>
            <TextBody />
          </Row>
          <Row>
            <Col sm={4}>
              <LD />
            </Col>
            <Col sm={8}>
              <Row>
                <Location />
              </Row>
              <Row>
                <Rating />
                <Mood />
              </Row>
              <Row>
                <Reply />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={2}>
          <Img />
        </Col>
        <Col sm={2}>
          <Profile />
        </Col>
      </Row>
    </Container>
  );
};

export default Wall;
