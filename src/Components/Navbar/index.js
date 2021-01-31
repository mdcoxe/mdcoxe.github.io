import './styles.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Navigate = () => {

    return  (
        <Navbar className="nav-title" collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Michael Coxe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigate;