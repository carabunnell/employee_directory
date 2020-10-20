import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Search extends Component {
    state = {
        result: {},
        search: ""
    };


render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            
          </Col>
          <Col size="md-4">
            
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Search;