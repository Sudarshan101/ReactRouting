import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col} from 'reactstrap';
import './Contact.css';

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="container contact-form">
          <div className="contact-image">
              <img src="codeicon.png" alt="rocket_contact"/>
          </div>
          <Form method="post">
            <h3>Drop Us a Message</h3>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Your Name *" />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Your Email *" />
                </FormGroup>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6">
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" rows="8" cols="8" name="message" id="message" placeholder="Your Message *" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <Button color="primary" size="lg" block>Submit</Button>
    </div>
    )
  }
}
