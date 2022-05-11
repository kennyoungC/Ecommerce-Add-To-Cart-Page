import { Col, Container, Row } from "react-bootstrap"
import ImageCarousel from "./ImageCarousel"
import MyNavbar from "./MyNavbar"
import Description from "./Description"
const ProductDetails = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={10}>
          <MyNavbar />
          <hr></hr>
          <Row className="align-items-center">
            <Col sm={6}>
              <ImageCarousel />
            </Col>
            <Col sm={6}>
              <Description />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails
