import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/wall.css';
import AboutMe from './subComponents/aboutMe';
import FriendsList from './subComponents/friendsList';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FormData from 'form-data';
import ProfileImage from './subComponents/profileImage';
import { publicDecrypt } from 'crypto';

const Profile = (props)=>{
    
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const [user, setUser] = useState();
	const [selectedFile, setSelectedFile] = useState([]);
	const [isSelected, setIsSelected] = useState(false);
    const [about, setAbout] = useState();
    const [userP, setUserP] = useState([]);

    const [uploadedImage, setUploadedImage] = useState("");
    const userId = useRef("");

    const authUser = async (userObject, jwt)=>{
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}});
        setUser(user.data);  
        setUploadedImage("http://localhost:5000/" + user.data.img);
        console.log(uploadedImage);
    }

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        authUser(userObject, jwt);
        userId.current = userObject;
    },[]);
        
    const logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    const goWall = () => {
        window.location = '/wall';
    };

    const imgChange = (event) => {
        console.log("logged in user", userId.current._id);
        console.log("img url", uploadedImage.current);

		setSelectedFile(event.target.files);
		setIsSelected(true);
	};

	const handleSubmission = (event) => {
        event.preventDefault();
        
        console.log('imgchange',selectedFile[0])
        const formData = new FormData();
        formData.append("img", selectedFile[0]);

        console.log("logged in user", userId.current._id);
        console.log("img url", uploadedImage.current);
        
        var config = {
            method: 'put',
            url: `http://localhost:5000/api/user/uploadmulter/${userId.current._id}`, 
            data : formData,
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
        });        
        window.location = '/profile';
	};

    const onAboutChange = event => {
        setAbout(event.target.value);
        console.log("About Me Edit", about)
    }

    const onSubmit = async event => {
        event.preventDefault();
        await axios .put(`http://localhost:5000/api/user/${user._id}/aboutme`,
        {aboutMe: about});
        console.log(about)
        window.location = '/profile';

    }

    // const userPost = async () => {
    //    const userPos = await axios .get(`http://localhost:5000/api/posts/${user._id}`)
      
    //    setUserP([userPos.data]);
    //      userP.map(post => {
    //         return <ul className="postStyle">
    //             <li>{post.text}</li>
    //         </ul>
    //     })
    // }

    

   

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
                        <Row className="profileName">{user.name}</Row>
                                <ProfileImage  url={uploadedImage}/>
                        <div>                          
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
                            <Row>
                            <Form onSubmit={(event)=>onSubmit(event)}>
                            <Form.Group>
                        <Form.Label className="loginText">Edit About Me</Form.Label>
                            <Form.Control type="aboutme" placeholder="Edit About Me"onChange={onAboutChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Edit
                        </Button> 
                        </Form>
                            </Row>
                            <Row className="friends">Friends</Row>
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