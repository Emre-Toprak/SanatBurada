import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';
import Container from "../components/Container"

const CompareProduct = () => {
  return (
    <>
    <Meta title= {"Compare Products"} />
    <BreadCrumb title = "Compare Products"/>
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch"/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                                Ürün ismi
                            </h5>
                            <h6 className="price mb-3 mt-3">
                                ürün fiyatı
                            </h6>
                            <div>
                                <div className="product-detail">
                                    <h5>
                                        Sanatçı:
                                    </h5>
                                    <p className="mb-0">Sanatçı ismi</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Stok durumu:
                                    </h5>
                                    <p className="mb-0">stok sayısı</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Boyut:
                                    </h5>
                                    <p className="mb-0">x cm</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Tür:
                                    </h5>
                                    <p className="mb-0">Tür</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Malzeme:
                                    </h5>
                                    <p className="mb-0">Materyal</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Renk:
                                    </h5>
                                    <Color />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch"/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                                Ürün ismi
                            </h5>
                            <h6 className="price mb-3 mt-3">
                                ürün fiyatı
                            </h6>
                            <div>
                                <div className="product-detail">
                                    <h5>
                                        Sanatçı:
                                    </h5>
                                    <p className="mb-0">Sanatçı ismi</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Stok durumu:
                                    </h5>
                                    <p className="mb-0">stok sayısı</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Boyut:
                                    </h5>
                                    <p className="mb-0">x cm</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Tür:
                                    </h5>
                                    <p className="mb-0">Tür</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Malzeme:
                                    </h5>
                                    <p className="mb-0">Materyal</p>
                                </div>
                                <div className="product-detail">
                                    <h5>
                                        Renk:
                                    </h5>
                                    <Color />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>

    </>
  )
}

export default CompareProduct