import React from 'react';
import ContactForm from '../components/ContactForm';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardText from 'react-bootstrap/esm/CardText';

// TODO: wrap inside container card and make neater, add email
const Contact = () => {
    return (
        <Container>
            <Card id='Contact'>
                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>Leave me a message here :)</CardText>
                    <ContactForm />
                </CardBody>
            </Card>
        </Container>
    );
};

export default Contact;