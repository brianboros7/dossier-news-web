import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 

export default function NavBar() {

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Liberty News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">US</Nav.Link>
                    <Nav.Link href="#link">World</Nav.Link>

                    <NavDropdown title="Politics" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">International</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Policy and Government</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">War and Conflict</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">C-Span</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    )
}