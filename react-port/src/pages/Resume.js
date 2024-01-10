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