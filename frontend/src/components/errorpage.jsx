import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './css/wall.css';

const ErrorPage = (props)=>{
    return(
        <Container fluid>
                <Row className="postStyle">
                    Error: Please login or register to use MyTrail.
                </Row>
        </Container>
    )
}

export default ErrorPage;