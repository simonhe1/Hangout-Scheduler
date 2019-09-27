import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.style = {
            backgroundColor: '#e3f2fd'
        };
    }
    render() { 
        return (
            <Navbar 
                expand="sm" 
                variant="light" 
                style={this.style}
            >
                <Navbar.Brand href="#">TruWalks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item >
                        <Nav.Item as="li">
                            <Nav.Link>
                                <Link to="/info/">My Info</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>
                                <Link to="/pets/">My Pets</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Navbar.Text>
                            <img src="/assets/tempDogFaceProfile.png" width="30" height="30" className="d-inline-block align-top" alt="Hello" />
                            {this.props.userName}
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavBar;