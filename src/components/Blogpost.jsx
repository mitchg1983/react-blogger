import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Blogpost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blogpost-panel">
        <Row>
          <Col>
            <div> {this.props.subject} </div>
            <div> by {this.props.authorName} </div>
            <div> {this.props.timeOfPost} </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div> {this.props.content} </div>
            <div> cID {this.props.cID} </div>
          </Col>
        </Row>
      </div>
    );
  }
}
