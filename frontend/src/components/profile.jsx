import {useState} from 'react';
import { Container } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const Profile = (props)=>{
    const [userInfo, setUserInfo] = useState();
    const [userA, setUserA] = useState();
    const jwt = localStorage.getItem('token');
    setUserA(jwtDecode(jwt));
    const infoReq = async() => {
        const response = await axios.put( `http://localhost:5000/api/user/${userA._id}/pendingfriends`,
        {
            "pendingFriends": "60b78076b267f2349cdd467c"
        });
        console.log(response);
        setUserInfo(response);
    }



    // const handleChange = (event) => {
    //     setText(event.target.value);
    //   };

    // const handleClick =()=>{
    //     const newComment={
    //     }
    //     props.addNewComment(newComment);
    //     setText('');
    // }
    infoReq()
    return(
        
      <Container>
          <Table>
              <Row>
             {userInfo}
              </Row>
          </Table>
      </Container>
    )
}

export default Profile;