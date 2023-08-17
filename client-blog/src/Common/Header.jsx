import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>BLOG SITE</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="me-2 text-decoration-none text-light" to='/'> Blogs</Link>
                    <Link className="me-2 text-decoration-none text-light" to='/create'>Create</Link>
                    <Link className="me-2 text-decoration-none text-light" to='/update/:id'>Update</Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;