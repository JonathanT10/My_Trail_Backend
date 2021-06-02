import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';


const Profile = (props)=>{
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =()=>{
        const newComment={
        }
        props.addNewComment(newComment);
        setText('');
    }

    return(
        <Container className="profileContainer">
            <Row>  
                <Col>
                    profile picture here
                </Col>              
                <Col className="aboutMeText">
                    <AboutMe />
                </Col>
            </Row>
            <Row className="friendsList">
                <FriendsList />
            </Row>
        </Container>
    )
}

export default Profile;