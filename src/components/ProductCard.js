import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    
  return (
  <>
  <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
    <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
                <img src="images/wish.svg" alt=""/>
                </button>
        </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="ürün resmi"/>
            <img src="images/watch.jpg" className="img-fluid" alt="ürün resmi"/>
        </div>
        <div className="product-details">
            <h6 className="brand">abc</h6>
            <h5 className="product-title">
                ürün ismi
            </h5>
            <ReactStars count={5} size={24} value="5" edit={false}  activeColor="#ffd700" />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
                ürün açıklaması</p>
            <p className="price">10000TL</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent"><img src="images/view.svg" alt=""/> </button>
                <button className="border-0 bg-transparent"><img src="images/prodcompare.svg" alt=""/> </button>
                <button className="border-0 bg-transparent"><img src="images/add-cart.svg" alt=""/> </button>
            </div>
        </div>
    </Link>
  </div>
  
  </>
  );
};

export default ProductCard