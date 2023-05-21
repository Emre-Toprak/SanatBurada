import React from 'react'
import {Link} from "react-router-dom";
import Container from "../components/Container"

const Checkout = () => {
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="webside-name">Sanat Burada</h3>
                        <nav 
                        style= {{ "--bs-breadcrumb-divider": '>' }} 
                        aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className="text-dark" to="/cart">Sepet</Link>
                        </li>
                        &nbsp; /
                        <li className="breadcrumb-item active" aria-current="page">
                            Fatura Bilgileri</li>
                        &nbsp; /
                        <li className="breadcrumb-item active">
                            Kargo Bilgileri
                        </li>
                        &nbsp; /
                        <li className="breadcrumb-item active" aria-current="page">
                            Ödeme
                        </li>
                        </ol>
                        </nav>
                        <h4 className="title">
                            Fatura Bilgileri
                        </h4>
                        <p className="user-details"> Kullanıcı adı soyadı </p>
                        <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                            <div className="w-100 ">
                                <select name="" id="" className="form-control form-select">
                                    <option value="" selected disabled>
                                        Ülke
                                    </option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <input type="text" placeholder="İsim" className="form-control"/>
                            </div>
                            <div className="flex-grow-1">
                                <input type="text" placeholder="Soyisim" className="form-control"/>
                            </div>
                            <div className="w-100">
                                <input type="text" placeholder="Adres" className="form-control"/>
                            </div>
                            <div className="w-100">
                                <input type="text" placeholder="Apartman, site vs." className="form-control"/>
                            </div>
                            <div className="flex-grow-1">
                                <select name="" id=""  className="form-control form-select">
                                    <option value="" selected disabled>
                                        İl
                                    </option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <select name="" id="" className="form-control form-select">
                                    <option value="" selected disabled>
                                        İlçe
                                    </option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <input type="text" placeholder="Posta Kodu" className="form-control"/>
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between aling- align-items-center ">
                                    <Link to="/cart" className="text-dark">Sepete Dön</Link>
                                    <Link to="/shipment" className="button">Kargo ile devam et</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className="border-bottom py-4 ">
                        <div className="d-flex gap-10 mb-2 align-items-center">
                            <div className="w-75 d-flex gap-10" >
                                <div className="w-25 position-relative">
                                    <span style={{ top:"-10px", right:"2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                    <img className="img-fluid" src="images/watch.jpg" alt=""/>
                                </div>
                                <div>
                                    <h5 className="total-price">Ürün ismi</h5>
                                    <p className="total-price">ürün detayı</p>
                                </div>
                            </div>
                            <div className="flex-grow-1"> 
                                <h5 className="total">
                                    10000 Tl
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="total">Ara Toplam</p>
                            <p className="total-price">1000 TL</p>
                         </div>
                         <div className="d-flex justify-content-between align-items-center">
                             <p className="mb-0 total">Kargo</p>
                             <p className="mb-0 total-price">0 TL</p>
                          </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-4 ">
                        <h4 className="total">Toplam</h4>
                        <h5 className="total-price">10000 TL</h5>
                    </div>
                </div>
            </div>
    </Container>


    </>
  )
}

export default Checkout