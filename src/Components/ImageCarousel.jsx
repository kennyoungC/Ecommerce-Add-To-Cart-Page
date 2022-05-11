import { Carousel } from "react-bootstrap"
import { useState } from "react"
import styles from "./ImageCarousel.module.css"
import img1 from "../images/image-product-1.jpg"
import img2 from "../images/image-product-2.jpg"
import img3 from "../images/image-product-3.jpg"
import img4 from "../images/image-product-4.jpg"
import smallImg1 from "../images/image-product-1-thumbnail.jpg"
import smallImg2 from "../images/image-product-2-thumbnail.jpg"
import smallImg3 from "../images/image-product-3-thumbnail.jpg"
import smallImg4 from "../images/image-product-4-thumbnail.jpg"
const ImageCarousel = () => {
  const [img, setImg] = useState(img1)
  const [isShowing, setIsShowing] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  })
  return (
    <>
      <img className="d-block w-100 rounded" src={img} alt="First slide" />
      <div className="d-flex justify-content-between align-items-center mt-4 small-img">
        <img
          className={isShowing.img1 ? styles["selected-img"] : ""}
          src={smallImg1}
          alt=""
          onClick={() => {
            setIsShowing({
              img1: true,
              img2: false,
              img3: false,
              img4: false,
            })
            setImg(img1)
          }}
        />
        <img
          src={smallImg2}
          alt=""
          className={isShowing.img2 ? styles["selected-img"] : ""}
          onClick={() => {
            setIsShowing({
              img1: false,
              img2: true,
              img3: false,
              img4: false,
            })
            setImg(img2)
          }}
        />
        <img
          src={smallImg3}
          alt=""
          className={isShowing.img3 ? styles["selected-img"] : ""}
          onClick={() => {
            setIsShowing({
              img1: false,
              img2: false,
              img3: true,
              img4: false,
            })
            setImg(img3)
          }}
        />
        <img
          src={smallImg4}
          alt=""
          className={isShowing.img4 ? styles["selected-img"] : ""}
          onClick={() => {
            setIsShowing({
              img1: false,
              img2: false,
              img3: false,
              img4: true,
            })
            setImg(img4)
          }}
        />
      </div>
    </>
  )
}

export default ImageCarousel
