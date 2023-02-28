import {Container, Nav, Navbar} from 'react-bootstrap';

export default function AppNavBar(){

    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home" className='logo'>EdU.</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home" className='navlink'>Home</Nav.Link>
                <Nav.Link href="#aboutMe" className='navlink'>About Me</Nav.Link>
                <Nav.Link href="#projects" className='navlink'>Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
            
        </Container>
        </Navbar>
    );
}