import React, { Component } from 'react'
import { Container, Card, CardBody} from 'reactstrap';
import './About.css';

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Container className="main-body">
          <Card className="padding10">
            <CardBody>
              <h2>What is Codesolution? </h2>
              <p>Our company was Founded in 2018, Code Solution is the online community for developers to learn, share their knowledge, and build their careers. More than 10 thousand programmers visit Code Solution each month for resolving his/her coding problems, developer can develop new skills learning from Code Solution, and find job opportunities. Our motive is to provide developers to easy and smart way to understanding programming language.<br /><br />Our content and resources are available in free of cost and we have provided each and every post codes and examples. We don’t force our Users to sign up with us or submit their details either. We just want to teach the easy and smart way to learn.</p>
              <h2>Our mission </h2>
              <p>Our mission is to deliver Simple and Smart way to Learn programing. And providing the complete and all content of technical languages without any preconditions and obstacles</p>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}
