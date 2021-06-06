import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './css/wall.css';

const LandingPage = (props)=>{

    return(
        <Container fluid>
                <Row className="postStyle">
                    Welcome to MyTrail! Please login
                </Row>
        </Container>
    )
}

export default LandingPage;