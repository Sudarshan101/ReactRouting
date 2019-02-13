import React, { Component } from 'react'
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="mb-50">
          <Navbar color="faded" light fixed='top' expand="md">
            <Link  href="/" to="/"><img width="100%" src="http://www.codesolution.co.in/assets/images/logoicon.png" alt="Codesolution"/></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                      <Link  href="/about" to="/about">About</Link>
                  </NavItem>
                  <NavItem>
                       <Link href="/news" to="/news">Updates</Link>
                  </NavItem>
                  <NavItem>
                      <Link href="/contact" to="/contact">Contact</Link>
                  </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    )
  }
}
