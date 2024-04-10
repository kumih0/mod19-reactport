import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card'
// import Typing from '@types/react-typing-animation';
import mainImg from '../assets/img/me/yeouido-uke.JPG';
import CardImg from "react-bootstrap/esm/CardImg";
import CardImgOverlay from "react-bootstrap/esm/CardImgOverlay";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardSubtitle from "react-bootstrap/esm/CardSubtitle";
import CardText from "react-bootstrap/esm/CardText";

const Home = () => {
    return (
        <Container className="home">
            <Card id="Home">
            <CardImg src={mainImg} fluid />
            <CardImgOverlay>
                {/* <Typing startDelay={100} speed={50}> */}
                    <CardTitle id="greeting">
                        Hey there, I'm KT.
                    </CardTitle>
                    {/* <Typing.Delay ms={1000} />
                    <Typing.Speed ms={200} /> */}
                    <CardSubtitle id="oneliner">
                        I'm a programmer, educator, baker, artist, and craft enthusiast.
                    </CardSubtitle>
                    {/* <Typing.Backspace count={20} /> */}
                    <CardText id="ty">
                        Thanks for dropping by :)
                    </CardText>
                    {/* <Typing.Backspace count={20} />
                    
                </Typing> */}
                {/* bs icons */}
            </CardImgOverlay>
            </Card>
        </Container>
    );
}; 

export default Home;