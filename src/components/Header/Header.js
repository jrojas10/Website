import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Header.scss"



function Header() {
    return (
        
        <Navbar bg="dark" variant="dark" sticky="top">
            <div className="hdr">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </div>
        </Navbar>

    )


}


export default Header