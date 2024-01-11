import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Resume() {
    return (
        <div className="resumes">
            <Container fluid >
                <Stack gap={3}>
                    <Row className="work-exp">
                        <Col>
                            <div className="title-heading">
                                <h3>Experience</h3>
                            </div>
                            <Row className="work-exp-item">
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
                            </Row>
                        </Col>
                    </Row>
                    <Row className="edu">
                        <Col>
                        <div className="title-heading">
                            <h3>Education</h3>
                        </div>
                        <div className="detail">
                            <Col>
                            <h4>Yonsei University, Underwood International College</h4>
                            </Col>
                            <Col>
                            <p>Bachelor's of Arts, Asian Studies</p>
                            </Col>
                            <Col>
                            <p>Graduated 2019</p>
                            </Col>
                        </div>
                        </Col>
                    </Row>
                    <Row className="skills">
                        <Col></Col>
                    </Row>
                    <Row className="certs">
                        <Col></Col>
                    </Row>
                </Stack>
            </Container>
        </div>
    );
};