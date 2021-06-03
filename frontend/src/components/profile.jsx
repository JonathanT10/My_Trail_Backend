// import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
// import axios from 'axios';
// import jwtDecode from 'jwt-decode';


const Profile = (props)=>{
    // const [user, setUser] = useState();
    // const jwt = localStorage.getItem('token');
    // setUser(jwtDecode(jwt));
    console.log(props._id)

    // const handleChange = (event) => {
    //     setText(event.target.value);
    //   };

    // const handleClick =()=>{
    //     const newComment={
    //     }
    //     props.addNewComment(newComment);
    //     setText('');
    // }


    return(
        <Container className="profileContainer">
            <Row>  
                <Col>
                    {/* <a href={"../images/" + {user.img}} /> */}img here
                </Col>  
                <Col>
                    <Row className="profileText">
                        <AboutMe  props={props}/>
                    </Row>
                    <Row className="profileText">
                        <FriendsList  props={props}/>
                    </Row>                
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;