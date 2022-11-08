import { Button, Container, Nav, Navbar as NavbarCon } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Navbar() {
  return (
    <NavbarCon sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Cart
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        <Button variant="outline-primary" style={{ position: "relative" }}>
          <AiOutlineShoppingCart size={30} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center  align-items-center "
            style={{ position: "absolute", height: "1.5rem", width: "1.5rem" , bottom : "-7px" , right: '-2px' ,color : " white "  }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarCon>
  );
}
