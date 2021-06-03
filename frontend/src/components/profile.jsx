// import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


const Profile = (props)=>{
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);

    const authUser = async (userObject, jwt)=>{
        console.log("auth trigger test")
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
        console.log(user.data);
        return user;
    }

    const user = authUser(userObject, jwt);

    return(
        <Container className="profileContainer">
            <Row>  
                <Col>
                    Img Here
                </Col>  
                <Col>
                    <Row className="profileText">
                        <AboutMe />
                    </Row>
                    <Row className="profileText">
                        <FriendsList />
                    </Row>                
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;