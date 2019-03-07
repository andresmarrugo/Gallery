import React, { Component } from 'react'
import {Row,Col, Container}from 'react-bootstrap';
import NavSearchBar from "./NavSearchBar";
import ImageList from './ImageList';

import ImageLoad from "../ImageLoad";

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
                <Col sm={4}><ImageLoad/></Col>
                <Col sm={8}><ImageList/></Col>
            </Row>
        </Container>          
    );
  }
}
