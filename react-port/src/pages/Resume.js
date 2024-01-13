import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

function Resume() {
    return (
        <div className="resumes">
            <Container fluid >
                <Stack gap={3}>
                    <Accordion defaultActiveKey="0">
                        <Row className="work-exp">
                            <Col>
                            <AccordionItem eventKey="0">
                                <Accordion.Header className="title-heading">
                                    <h3>Experience</h3>
                                </Accordion.Header>
                                <Accordion.Body className="work-exp-item">
                                    <Col>
                                        <Row className="job-heading">
                                            <Col className="job-place">
                                                <h4 className="title-heading">Job Title</h4>
                                                <h5 className="subtitle">Place, location</h5>
                                            </Col>
                                            <Col className="subtitle job-time">
                                                <p className="description">
                                                    Month Year - Month Year
                                                </p>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="job-detail">
                                            <Col>
                                                <p>Brief description of job</p>
                                                <ul>
                                                    <li>highlight 1</li>
                                                    <li>highlight 2</li>
                                                    <li>highlight 3</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Accordion.Body>
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
                                        <Col>
                                            <h4>Yonsei University, Underwood International College</h4>
                                        </Col>
                                        <Col>
                                            <p>Bachelor's of Arts, Asian Studies</p>
                                        </Col>
                                        <Col>
                                            <p>Graduated 2019</p>
                                        </Col>
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
                                        <ul className="skills-list">
                                            <li>relevant skill</li>
                                            <li>skill 2</li>
                                            <li>skill 3</li>
                                        </ul>
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
                                        <ul className="cert-list">
                                            <li>certicate 1</li>
                                            <li>cert ex 2</li>
                                            <li>cert ex 3 date</li>
                                        </ul>
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