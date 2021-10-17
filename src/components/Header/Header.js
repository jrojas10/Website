import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#one">About</Nav.Link>
                    <Nav.Link href="#two">About Me</Nav.Link>
                    <Nav.Link href="#three">3</Nav.Link>
                </Nav>
            </Container>

        </Navbar>

    )


}


export default Header