import React from "react";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";


const WorkExp = () => {
    return (
        <>
            <AccordionHeader className="title-heading">
                <h3>Experience</h3>
            </AccordionHeader>
            <AccordionBody className="work-exp-items">

                <Card>
                    <Card.Header className="job-heading">
                        <Card.Title className="job-title">Job Title</Card.Title>
                        <Card.Subtitle className="job-place">Place, Location</Card.Subtitle>
                        <Card.Text className="job-time">Month Year - Month Year</Card.Text>
                    </Card.Header>

                    <Card.Body>
                        <Card.Text className="job-detail">Brief description of job</Card.Text>
                    </Card.Body>
                    <ListGroup className="job-highlights">
                        <ListGroupItem>highlight 1</ListGroupItem>
                        <ListGroupItem>highlight 2</ListGroupItem>
                        <ListGroupItem>highlight 3</ListGroupItem>
                    </ListGroup>
                </Card>


            </AccordionBody>
        </>
    );
};

export default WorkExp;