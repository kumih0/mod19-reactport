import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

// TODO: useeffect and props to populate resume info
const WorkExp = () => {
    return (
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
    );
};

export default WorkExp;