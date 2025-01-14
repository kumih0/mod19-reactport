import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// TODO: cross ref diff b/w navlink rxbs and rx-rtr-rom

function NavBar() {
  return (
        <Navbar expand='md' className="bg-body-tertiary mb-3" data-bs-theme="dark" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#Home">
            <img />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Projects">Projects</Nav.Link>
                  <NavDropdown
                    title="Contact"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                  <NavDropdown.Item href="#Contact">
                      Contact
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#Socials">
                      Socials
                    </NavDropdown.Item> 
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Resumes" >Resumes</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
};

// const Navbar = () => {
//     return (
//         <Navbar id="navbar" className="navbar" sticky="top">
//             <ul className="nav-items">
//                 <li><a href='#'>Home</a></li>
//                 <li><a href='#'>About</a></li>
//                 <li><a href='#'>Projects</a></li>
//                 <li><a href='#'>Contact</a></li>
//             </ul>
//         </Navbar>
//     );
// };


export default NavBar;