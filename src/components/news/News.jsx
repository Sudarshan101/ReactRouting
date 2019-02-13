import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './News.css';

export default class News extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
       <Container>
          <Row>
            <Col xs="12" sm="8" md="9" lg="9">
              <Row className="cart-list">
                <Col xs="12" sm="6" md="6" lg="4"  className="cart-item">
                  <Card>
                    <CardImg top width="100%" src="codeicon.png" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Link to="/about"><Button>Button</Button></Link>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="6" lg="4"  className="cart-item">
                  <Card>
                    <CardImg top width="100%" src="codeicon.png" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Link to="/about"><Button>Button</Button></Link>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="6" lg="4"  className="cart-item">
                  <Card>
                    <CardImg top width="100%" src="codeicon.png" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Link to="/about"><Button>Button</Button></Link>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="6" lg="4"  className="cart-item">
                  <Card>
                    <CardImg top width="100%" src="codeicon.png" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Link to="/about"><Button>Button</Button></Link>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm="4" md="3" lg="3">
              <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
