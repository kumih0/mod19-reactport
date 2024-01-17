import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';


const About = () => {
    return (
    <div id="about" >
        <Container>
            <Row>
                <Card>
                    <CardImg />
                    {/* will contain img carousel */}
                    <CardImgOverlay>
                        {/* will contain details as overlay */}
                    <CardTitle>About Me</CardTitle>
                    <CardText>Hi it's me</CardText>
                    </CardImgOverlay>
                </Card>
            </Row>
        </Container>
    </div>
    );
};

export default About;