import {useState, useEffect} from 'react';
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
    const [user, setUser] = useState();

    const authUser = async (userObject, jwt)=>{
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}});
        setUser(user.data);
        console.log(user);
    }

    useEffect(()=>{
        authUser(userObject, jwt);

    });

    return(
        <div>
        {user ?
            <Container className="profileContainer">
                <Row>  
                    <Col>
                        {/* <img src={"../../../" + user.img} alt="" /> */}
                    </Col>  
                    <Col>
                        <Row className="profileText">
                            <AboutMe aboutMe={user.aboutMe} />
                        </Row>
                        <Row className="profileText">
                            <FriendsList props={user.friendsList}/>
                        </Row>                
                    </Col>
                </Row>
            </Container>
        :
            <div>
            </div>
        }
        </div>
    )
}

export default Profile;