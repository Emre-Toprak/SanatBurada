import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import Container from "../components/Container"
const Cart = () => {
  return (
    <>
    <Meta title= {"Cart"} />
     <BreadCrumb title = "Cart"/>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                        <h4 className="cart-col-1">Ürün</h4>
                        <h4 className="cart-col-2">Fiyat</h4>
                        <h4 className="cart-col-3">Adet</h4>
                        <h4 className="cart-col-4">Toplam</h4>
                    </div>
                    <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                                <img src="images/watch.jpg" className="img-fluid" alt="ürün resmi"/>
                            </div>
                            <div className="w-75">
                                <p>isim</p>
                                <p>boyut</p>
                                <p>renk</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price"> 10000 TL</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div>
                                <input 
                                className="form-control"
                                type="number"
                                min={1}
                                max={10}
                                />
                            </div>
                            <div>
                                <AiFillDelete className="text-danger" />
                            </div>
                        </div>
                        <div className="cart-col-4">
                            <h5 className="price"> 10000 TL</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline"> 
                        <Link to="/product" className="button"> Alışverişe Devam</Link>
                        <div className="d-flex flex-column align-items-end"> 
                            <h4>Ara toplam</h4>
                            <p>Vergiler dahil</p>
                            <Link to="/checkout" className="button"> Ödemeye geç</Link>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Cart