import {useState} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Post from './post';
import NewPost from './newPost';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './css/wall.css';


const Wall = (props)=>{
    const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const [postAll, setPostAll] = useState([]);

    const authUser = async ()=>{
        console.log("auth trigger test wall")
        const user = await axios.get(`http://localhost:5000/api/user/${userObject._id}`, {headers: {Authorization : 'Bearer' + jwt}})
        console.log('wall user data:', user.data);
        return user;
    }

    const postA = async ()=>{
        const response = await axios.get(`http://localhost:5000/api/posts/`)
        setPostAll(response.data)
        console.log("wall",postAll);}


    const user = authUser();

    
    const logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    }

    const goProfile = () => {
        window.location = '/profile';
    }

    // post needs to map all posts matching logged in user, and everyone on friends list

    return(
        <>
        {user ?
            <div>
                <Container fluid>
                    <Row className="profileButton">   
                        <Button className="btn btn-success btn-md" onClick={()=> goProfile()}>
                                Profile
                        </Button>         
                        <Button className="btn btn-success btn-md" onClick={()=> logOut()}>
                                Log Out
                        </Button>  
                    </Row>               
                        <Row className="postStyle">
                            <Post  user={user} postA={postA()}/>
                        </Row>
                        <Row className="newPostStyle">
                            <NewPost  user={user}/>
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

export default Wall;