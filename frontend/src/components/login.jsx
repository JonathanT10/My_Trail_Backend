import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/wall.css';
import axios from 'axios';
import { useParams } from 'react-router';

const Wall = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = async (email, password) =>{
        axios
            .post(`http://localhost:5000/api/auth/`, {
                params:{email: email, password: password}
                })
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
                console.log(token);
            })
    }


    // useEffect(() => {
    //     axios
    //       .get(`http://localhost:5000/api/ytclone/${videoId}`)
    //       .then((response) => setComments(response.data));
    //       console.log(videoId)
    //   }, [videoId]);

    // post needs to map all posts matching logged in user, and everyone on friends list

    return(
        <Container fluid>
            <Table>                    
                <Row className="postStyle">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={emailChange}/>
                            <Form.Text className="text">
                            -----We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={passwordChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>handleClick(email, password)}>
                            Submit
                        </Button>
                        </Form>
                </Row>
            </Table>
        </Container>
    )
}

export default Wall;