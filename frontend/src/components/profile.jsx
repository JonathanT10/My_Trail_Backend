import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FormData from 'form-data';

const Profile = (props)=>{
    
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const [user, setUser] = useState();
	const [selectedFile, setSelectedFile] = useState([]);
	const [isSelected, setIsSelected] = useState(false);

    const uploadedImage = useRef();

    const authUser = async (userObject, jwt)=>{
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}});
        setUser(user.data);
        console.log('profile page user', {user});
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
		setSelectedFile(event.target.files);
		setIsSelected(true);
	};

	const handleSubmission = (event) => {
        event.preventDefault();
        
        console.log('imgchange',selectedFile[0])
        const formData = new FormData();
        formData.append("img", selectedFile[0]);

        console.log('handlesubmit', formData);
        console.log(user.id);
        
        var config = {
            method: 'put',
            url: `http://localhost:5000/api/user/uploadmulter/${user._id}`,
            body : formData[0],
            headers: {
              "Content-Type": "multipart/form-data",
            },
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
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
                            <img ref={uploadedImage} alt="" />
                            <br/>
                            <div>
                                    <form onSubmit={handleSubmission} encType='multipart/form-data'>
                                    <input type="file" name="img" onChange={imgChange} />
                                    {isSelected ? ( 
                                        <div className="loginText">
                                            <p>Filename: {selectedFile[0].name}</p>
                                            <p>Filetype: {selectedFile[0].type}</p>
                                            <p>Size in bytes: {selectedFile[0].size}</p>
                                        </div>
                                    ) : (
                                    <p className="loginText">Select a file to show details</p>
                                    )}
                                    <div className="loginText">
                                    <Button className="btn btn-success btn-md" type="submit">Submit</Button>
                                    </div>  
                                    </form>                                   
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