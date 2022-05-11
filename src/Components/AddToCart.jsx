import React from "react"
import styles from "./AddToCart.module.css"

const AddToCart = (props) => {
  return (
    <button className={styles.btnAdd}>
      <i className="bi bi-cart3"></i>
      <span>Add to cart</span>
    </button>
  )
}

export default AddToCart
