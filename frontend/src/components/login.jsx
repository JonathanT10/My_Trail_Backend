import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Wall from '../components/wall';
import './css/wall.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login= () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/api/auth/`, {email: email, password: password})
            .then(response => {
                console.log(response);
                const  token  = response.data;
                localStorage.setItem('token', token);
                window.location = '/wall';
                console.log(token);
            }).catch(error => {
                //invalid alert here
                console.log('Error', error);
            });
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
                    <Form  onSubmit={(event)=>handleClick(event)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="loginText">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={emailChange}/>
                            <Form.Text className="loginText">
                            -----We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="loginText">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={passwordChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit  
                        </Button> {'   '}
                            <Link to="/register">
                                <Button variant="primary">
                                    Register
                                </Button>
                            </Link>
                            
                        </Form>
                </Row>
            </Table>
        </Container>
    )
}

export default Login;