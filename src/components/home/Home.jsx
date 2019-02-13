import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Home.css';

export default class Home extends Component {
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
              <ListGroup className="list_div">
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="image-div">
                     <img top width="100%" src="codeicon.png" className="image-left" alt="Card image cap" />
                  </div>
                  <div className="image-title">
                     <h2 className="font14">Cras justo odio</h2>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
