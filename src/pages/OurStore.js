import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"
import Color from '../components/Color';
import Container from "../components/Container"

const OurStore = () => {
    const [grid, setGrid] = useState(4);
  return ( 
<>
    <Meta title= {"Our Store"} />
  <BreadCrumb title = "Our Store"/>
  <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-3">
                <div className="filter-card mb-3">
                    <h3 className="filter-title">Shop By Categories</h3>
                    <div>
                        <ul className="ps-0">
                            <li>asdas</li>
                            <li>sdada</li>
                            <li>sdadad</li>
                            <li>asdwds</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title"> Filter By</h3>
                    <div>
                        <h5 className="sub-title">Availability</h5>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="" />
                            <label className="form-check-label" htmlFor="">
                                in stock (1)
                            </label>
                         </div>
                         <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id=""/ >
                            <label className="form-check-label" htmlFor="">
                                out of stock (0)
                            </label>
                         </div>
                    </div>
                    <h5 className="sub-title">Fiyat</h5>
                    <div className="d-flex align-items-center gap-10">
                        <div className="form-floating">
                            <input type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="From"/>
                            <label htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" 
                            className="form-control" 
                            id="floatingInput1" 
                            placeholder="To"/>
                            <label htmlFor="floatingInput1">To</label>
                        </div>
                    </div>
                    <h5 className="sub-title">Renkler</h5>
                        <div>
                            <Color />
                        </div>
                        <h5 className="sub-title">Boyut</h5>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1">
                                    S (2)
                                </label>
                             </div>
                             <div className="form-check">
                                <input className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="color-2" 
                                />
                                <label className="form-check-label" htmlFor="color-2">
                                    M (2)
                                </label>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Product Tags
                    </h3>
                    <div>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                asddas
                            </span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                asddas
                            </span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                asddas
                            </span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                asddas
                            </span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                asddas
                            </span>
                        </div>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Random Product
                    </h3>
                    <div>
                        <div className="random-products mb-3 d-flex">
                            <div className="w-50">
                                <img src="images/watch.jpg" className="img-fluid" alt="ss"/>
                            </div>
                            <div className="w-50">
                                <h5>dsadsadadsad</h5>
                                <ReactStars count={5} size={24} value="5" edit={false}  activeColor="#ffd700" />
                                <b>10000 TL</b>
                            </div>
                        </div>
                        <div className="random-products d-flex">
                            <div className="w-50">
                                <img src="images/watch.jpg" className="img-fluid" alt="ss"/>
                            </div>
                            <div className="w-50">
                                <h5>dfaffsfd</h5>
                                <ReactStars count={5} size={24} value="5" edit={false}  activeColor="#ffd700" />
                                <b>10000 TL</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 d-block" style={{ width: "100px" }}> Sırala</p>
                            <select name="" className="form-control form-select" id="">
                                <option value="manual"> Featured</option>
                                <option value="best-selling">
                                    best selling
                                </option>
                                <option value="title-ascending">Alfabetik sıralama a-z</option>
                                <option value="title-descending">Alfabetik sıralama z-a</option>
                                <option value="price-ascending">Yükselen Fiyat</option>
                                <option value="price-descending">Alçalan Fiyat</option>
                                <option value="created-ascending">Eklenme Tarihi yükselen</option>
                                <option value="created-descending">Eklenme Tarihi alçalan</option>
                            </select>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0">21 eser</p>
                                <div className="d-flex gap-10 align-items-center grid">
                                    <img onClick={() => { setGrid(3); }} src="images/gr4.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={() => { setGrid(4); }} src="images/gr3.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={() => { setGrid(6); }} src="images/gr2.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={() => { setGrid(12); }} src="images/gr.svg" className="d-block img-fluid" alt="grid"/>
                                    
                                </div>
                            </div>
                    </div>
                </div>
                <div className="products-list pb-5">
                   <div className="d-flex gap-10 flex-wrap">
                    <ProductCard grid={grid} />
                   </div>
                </div>
            </div>
        </div>
</Container>
 </>
  );
};

export default OurStore