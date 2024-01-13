import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

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