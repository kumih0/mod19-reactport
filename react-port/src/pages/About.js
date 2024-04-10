import React from 'react';
import Card from 'react-bootstrap/Card'
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';
import CardImg from 'react-bootstrap/esm/CardImg';
import face from '../assets/img/me/cottoncandy-face.JPG';

// TODO: create styles.css for card formatting, create border and color scheme
const About = () => {
    return (
            <Card id="About" >
                <CardImg src={face} alt="Me :)" />
                <CardImgOverlay>
                    <CardTitle>About Me</CardTitle>
                    <CardText>Hi it's me</CardText>
                    <CardText>More about me</CardText>
                </CardImgOverlay>
            </Card>
    );
};

export default About;