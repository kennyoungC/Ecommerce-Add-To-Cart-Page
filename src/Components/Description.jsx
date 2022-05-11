import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import AddToCart from "./AddToCart"
import styles from "./Description.module.css"
const Description = () => {
  const [counter, setCounter] = useState(0)
  const [productTitle, setProductTitle] = useState(
    "Fall Limited Edition Sneakers"
  )
  const sub = () => {
    if (counter < 1) {
      return
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <div>
        <span className={styles.subheader}>SNEAKER COMPANY</span>
        <h1 className={`${styles.h1} mb-4`}>{productTitle}</h1>
        <p className={styles["product-desc"]}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className="d-flex gap-4 align-items-center">
          <p className={`${styles.price} mb-0`}>$125.00</p>
          <span>50%</span>
        </span>
        <p className={`${styles["discount-price"]} text-muted`}>$250.00</p>
      </div>
      <Row>
        <Col md={5}>
          <div className={styles.quantity}>
            <button onClick={sub}> &#8722;</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}> &#43; </button>
          </div>
        </Col>
        <Col md={7}>
          <AddToCart numOfItem={counter} />
        </Col>
      </Row>
    </>
  )
}

export default Description
