import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


const Profile = (props)=>{
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const [user, setUser] = useState();
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

    const authUser = async (userObject, jwt)=>{
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}});
        setUser(user.data);
        console.log('profile page user', user);
    }

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        authUser(userObject, jwt);
    },[]);
    
    
    const logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    const goWall = () => {
        window.location = '/wall';
    };

    const imgChange = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = async () => {
        axios
            .put(`http://localhost:5000/api/user/uploadmulter/${user._id}`, {headers: {Authorization : 'Bearer' + jwt}}, {file: selectedFile})
            .then(response => {
                console.log(response);
                // window.location = '/profile';
            });
	};

    return(
        <>
        {user ?
            <div>
                <Container fluid>
                    <Row className="profileButton">
                            <Button className="btn btn-success btn-md" onClick={()=> goWall()}>
                                    Wall
                            </Button>         
                            <Button className="btn btn-success btn-md" onClick={()=> logOut()}>
                                    Log Out
                            </Button> 
                    </Row>
                            <br/>
                            <br/>  
                    <Row className="profileContent"> 
                        <Col>
                        <div>
                            <img src={`../../public/uploads/${user.img}`} alt="" />
                            <br/>
                            <div>
                                <input type="file" name="img" onChange={imgChange} />
                                {isSelected ? (
                                    <div className="loginText">
                                        <p>Filename: {selectedFile.name}</p>
                                        <p>Filetype: {selectedFile.type}</p>
                                        <p>Size in bytes: {selectedFile.size}</p>
                                        <p>
                                            lastModifiedDate:{' '}
                                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="loginText">Select a file to show details</p>
                                )}
                                <div className="loginText">
                                <Button className="btn btn-success btn-md" onClick={() => handleSubmission()}>Submit</Button>
                                </div>
                            </div>
                        </div>
                        </Col>  
                        <Col>            
                            <Row className="profileText">
                            <AboutMe aboutMe={user.aboutMe} />
                            </Row>
                            <Row className="profileText">
                                <FriendsList props={user} />
                            </Row>                 
                        </Col> 
                    </Row> 
                </Container>
            </div>
        :
            <>
            </>
        }
        </>
    )
}

export default Profile;