import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import imageAvatar from "../images/image-avatar.png"
import logo from "../images/logo.svg"
import styles from "./MyNavbar.module.css"
const MyNavbar = () => {
  const [showCart, setShowCart] = useState(false)
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto pt-3">
              <Nav.Link href="#home">Collections</Nav.Link>
              <Nav.Link href="#link">Men</Nav.Link>
              <Nav.Link href="#link">Women</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex align-items-center gap-3">
        <span className={`${styles.cart} fs-4`}>
          <i className="bi bi-cart3" onClick={() => setShowCart(!showCart)}></i>
          <div
            className="position-absolute"
            style={{ opacity: showCart ? 1 : 0 }}
          >
            <p className="mb-0 px-2 fs-5 py-2 fw-bold">Cart</p>
            <hr></hr>
            <div className="my-3 d-flex align-items-center justify-content-between px-2">
              <img src="https://via.placeholder.com/48" alt="" />
              <div className="d-flex flex-column justify-content-center text-muted">
                <p className="mb-0 ">Fall Limited Edition Sneakers</p>
                <p className="mb-0">
                  $125.00 x 3 <span className="fw-bold text-dark">$375.00</span>
                </p>
              </div>
              <button>
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </span>
        <img
          src={imageAvatar}
          alt=""
          style={{ width: "48px", height: "48px", borderRadius: "50%" }}
        />
      </div>
    </div>
  )
}

export default MyNavbar
