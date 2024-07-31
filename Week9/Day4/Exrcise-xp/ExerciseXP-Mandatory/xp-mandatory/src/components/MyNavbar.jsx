import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="md" className="bg-light">
      <Container>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
