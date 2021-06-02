import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
import axios from 'axios';


const Profile = (props)=>{
    const [user, setUser] = useState();

    const sessionUser = props;

    // const handleChange = (event) => {
    //     setText(event.target.value);
    //   };

    // const handleClick =()=>{
    //     const newComment={
    //     }
    //     props.addNewComment(newComment);
    //     setText('');
    // }

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/user/${sessionUser._id}`)
        .then((response) => setUser(response.data))
    }, );
    
    console.log(props.data)

    return(
        <Container className="profileContainer">
            <Row>  
                <Col>
                    {/* <a href={"../images/" + {user.img}} /> */}
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