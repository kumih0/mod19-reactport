import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
    <div id="about" >
        <Container>
                <div>images</div>
            <Row>

                <div>description</div>
                <div>education</div>
                <div>skills/programming lang</div>
            </Row>
        </Container>
    </div>
    );
};

export default About;