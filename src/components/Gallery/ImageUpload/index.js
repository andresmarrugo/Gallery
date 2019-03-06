import React, { Component } from 'react'
import {Form, Button,Row, Col}from 'react-bootstrap';
export default class ImageUpload extends Component {
  render() {
    return (
        <Form>
            <Row>
                <Col>
                <input type="file">Imagen</input>
                </Col>
                <Col>
                   <Button>Add</Button>>
                </Col> 
            </Row>
      </Form>
    );
  }
}
