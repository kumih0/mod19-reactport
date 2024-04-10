import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// TODO: make only accessible to me as admin to write blog posts
const NewPost = () => {
    return (
        <Container>
            <Form id="postForm" >
                <FormGroup className='mb-3' controlId='postTitle'>
                    <FloatingLabel controlId='title' label="Post title">
                        <FormControl type="text" placeholder="Post title" />
                    </FloatingLabel>
                </FormGroup>

                <FormGroup className='mb-3' controlId='postText'>
                    <FloatingLabel controlId='text' label="Post text">
                        <FormControl as="textarea" placeholder="Post text" style={{ height: '500px' }} />
                    </FloatingLabel>
                </FormGroup>
                <Form.Group controlId="multiFileUpload" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Button type='submit' variant='primary'>Save post</Button>
            </Form>
        </Container>
    );
};