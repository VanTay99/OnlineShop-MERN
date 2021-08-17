import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { singout } from '../../actions'

/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector((state) => state.auth);
    const dispatch= useDispatch();
    const logout=()=>{
      dispatch(singout());

    }
   

    const renderLoggedInLinks = () => {
        return (
          <Nav>
            <li className="nav-item">
              <Button className="btn btn-primary" onClick={logout}>
                Signout
              </Button>
            </li>
          </Nav>
        );
      }
    const renderNonLoggedInLinks = () => {
        return (
          <Nav>
            <li className="nav-item">
              <NavLink to="signin" className="nav-link">
                Signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </Nav>
        );
      }


    return (
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
           <Container fluid >
                <Link to="/" className="navbar-brand" >Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks(): renderNonLoggedInLinks()}
                </Navbar.Collapse>
                </Container>
        </Navbar>
    )

}

export default Header