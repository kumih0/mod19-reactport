import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import WorkExp from './WorkExp';

function Resume() {
    return (
        <div className="resumes" id='Resumes'>
            <Container fluid >
                <Stack gap={3}>
                    <Accordion defaultActiveKey="0">

                        <Row className="work-exp">
                            <Col>
                                <AccordionItem eventKey="0">
                                    <WorkExp />
                                </AccordionItem>
                            </Col>
                        </Row>

                        <Row className="edu">
                            <Col>
                                <AccordionItem eventKey="1">
                                    <Accordion.Header className="title-heading">
                                        <h3>Education</h3>
                                    </Accordion.Header>
                                    <Accordion.Body className="detail">

                                        <Card>
                                            <Card.Title>Yonsei University, Underwood International College</Card.Title>
                                            <Card.Subtitle>Bachelor's of Arts, Asian Studies</Card.Subtitle>
                                            <Card.Text>Graduated 2019</Card.Text>
                                        </Card>

                                        <p>See also: Certifications for additional education.</p>

                                    </Accordion.Body>
                                </AccordionItem>
                            </Col>
                        </Row>

                        <Row className="skills">
                            <Col>
                                <AccordionItem eventKey="2">
                                    <Accordion.Header className="title-heading">
                                        <h3>Skills</h3>
                                    </Accordion.Header>

                                    <Accordion.Body>

                                        <ListGroup horizontal="sm" className="skills-list">
                                            <ListGroupItem>relevant skill</ListGroupItem>
                                            <ListGroupItem>relevant skill 2</ListGroupItem>
                                            <ListGroupItem>relevant skill 3</ListGroupItem>
                                        </ListGroup>

                                    </Accordion.Body>

                                </AccordionItem>
                            </Col>
                        </Row>

                        <Row className="certs">
                            <Col>
                                <AccordionItem eventKey="3">
                                    <Accordion.Header className="title-heading">
                                        <h3>Certifications</h3>
                                    </Accordion.Header>

                                    <Accordion.Body>

                                        <Card>
                                            <Card.Title>Certification title</Card.Title>
                                            <Card.Subtitle>date completed</Card.Subtitle>
                                            <Card.Text>Institution</Card.Text>
                                            <Card.Link href="#">Further info.</Card.Link>
                                        </Card>

                                    </Accordion.Body>

                                </AccordionItem>
                            </Col>
                        </Row>

                    </Accordion>
                </Stack>
            </Container>
        </div>
    );
};

export default Resume;