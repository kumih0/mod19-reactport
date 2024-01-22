import React from 'react';
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import face from '../assets/img/me/cottoncandy-face.JPG';


const About = () => {
    return (
            <Card id="about" >
                <CardImg src={face} alt="Me :)" />
                {/* will contain img carousel */}
                <CardImgOverlay>
                    {/* will contain details as overlay */}
                    <CardTitle>About Me</CardTitle>
                    <CardText>Hi it's me</CardText>
                    <CardText>More about me</CardText>
                </CardImgOverlay>
            </Card>
    );
};

export default About;