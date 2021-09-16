import React ,{Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand ><Link  className="nav-link text-white " to="/covid">Covid Status</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Link className="nav-link" to="/world">World</Link>

                <Link className="nav-link" to="/india">India</Link> {/*classname nav link to change color to white */}
                
              </Nav>
              
            </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default Header;