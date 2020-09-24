import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function New (props) {

  return (
    <Container>
      <Form>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Row>
              <Col sm={3}>
                <Form.Label>Answer 1</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col sm={3}>
                <Form.Label>Answer 2</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col sm={3}>
                <Form.Label>Answer 3</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col sm={3}>
                <Form.Label>Answer 4</Form.Label>
                <Form.Control type="text" />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}