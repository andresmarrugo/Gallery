import React, { Component } from 'react'
import {Row,Col, Container}from 'react-bootstrap';
import NavSearchBar from "./NavSearchBar";
import ImageUpload from './ImageUpload';
import FormContainer from "../FormContainer";

export default class Gallery extends Component {
  render() {
    return (
        <Container className="contain">
            <NavSearchBar/>
            <Row>
                <Col xs={12}>
                    
                </Col>
            </Row>
            <Row>
                <Col sm={4}><FormContainer/></Col>
                <Col sm={8}>VIEW</Col>
            </Row>
        </Container>          
    );
  }
}
