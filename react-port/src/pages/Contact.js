import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

const ContactForm = () => {
    return (
        <Form>
            <FormGroup className="" controlId='contactEmail'>
                <FloatingLabel controlId='email' label="Email address" className='mb-3'>
                    <FormControl type="email" placeholder="Email address" required />
                </FloatingLabel>
            </FormGroup>
            <FormGroup className="" controlId="contactName">
                <FloatingLabel controlId="name" label="Contact name" className='mb-3'>
                    <FormControl type="text" placeholder="Contact name" required />
                </FloatingLabel>
            </FormGroup>
            <FormGroup className="" controlId="msgSubject">
                <FloatingLabel controlId="subject" label="Subject" className='mb-3'>
                    <FormControl type="text" placeholder="Subject" required />
                </FloatingLabel>
            </FormGroup>
            <FormGroup className="" controlId='msgText'>
                <FloatingLabel controlId="message" label="Message" required>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a message here :)"
                        style={{ height: '200px' }}
                    />
                </FloatingLabel>
            </FormGroup>
            <Button variant="primary" type="submit">Send message</Button>
        </Form>
    );
};