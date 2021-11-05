import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import "./Header.scss"



function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Container>

        </Navbar>

    )


}


export default Header