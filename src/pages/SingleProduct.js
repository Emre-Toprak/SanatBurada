import React, { useState } from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import Container from "../components/Container"

const SingleProduct = () => {
  const props = {width: 400, height: 600, zoomWidth: 600, 
    img: "https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg"
  };
  const [orderedProduct, setorderedProduct] = useState(false);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  };
  return (
    <>  
    <Meta title= {"Product Name"} />
    <BreadCrumb title = "Product Name"/>
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                    <div><ReactImageZoom {...props} /></div>
                  </div>
                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div> <img src="https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg" className="img-fluid" alt=""/></div>
                    <div> <img src="https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg" className="img-fluid" alt=""/></div>
                    <div> <img src="https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg" className="img-fluid" alt=""/></div>
                    <div> <img src="https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg" className="img-fluid" alt=""/></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                    <div className="border-bottom">
                      <h3 className="title">Ürün ismi</h3>
                    </div>
                    <div className="border-bottom py-3">
                      <p className="price">2000 TL</p>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars count={5} size={24} value="5" edit={false}  activeColor="#ffd700" />
                         <p className="mb-0 t-review">2 değerlendirme</p>
                      </div>
                      <a className="review-btn" href="#review">Değerlendirme yazın</a>
                    </div>
                    <div className=" py-3">
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Tür: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Malzeme: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Kimden: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Etiketler: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Stok: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Boyut: </h3> <p className="product-data">dsa</p>
                      </div>
                      <div className="d-flex gap-10 flex-column mb-3 mt-2">
                        <h3 className="product-heading">Renkler: </h3>
                        <Color/>
                      </div>
                      <div className="d-flex align-items-center gap-15 flex-row my-2">
                        <h3 className="product-heading mb-0">Adet: </h3>
                        <div className="">

                          <input 
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          style= {{width: "70px" }}
                          id=""
                          className="form-control"
                          />
                        </div>
                        <div className="d-flex align-items-center gap-30 ms-5">
                          <button className="button border-0" type="submit"> 
                          Sepete Ekle</button>
                          <button className="button border-0" type="submit"> 
                          Şimdi al</button>
                      </div>
                      </div>
                      <div className="d-flex align-items-center gap-15 ">
                        <div>
                          <a href="">
                            <TbGitCompare className="fs-5 me-2"  /> Kıyasla
                          </a>
                        </div>
                        <div>
                          <a href=""> 
                            <AiOutlineHeart className="fs-5 me-2" /> Favorilere ekle</a>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column my-3">
                        <h3 className="product-heading">Kargo ve İade </h3> <p className="product-data">asdasdasd</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-3">
                        <a 
                        href="javascript:void(0)" 
                        onClick={() => {
                          copyToClipboard("https://www.oxxo.com.tr/ContentImages/Blog/images/Yasam/heykeltiras_michelangelo_unlu_heykelleri.jpg"
                          );
                        }} 
                        
                        >Ürün Linkini Kopyala</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              
            <p>
              llasdasdasdwqdqwd
            </p>
              </div>
          </div>
        </div>
    </Container>
    <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review" >Yorumlar</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Müşteri Yorumları</h4>
                  <div className="d-flex align-items-center gap-10"><ReactStars count={5} size={24} value="5" edit={false}  activeColor="#ffd700" />
                  <p className="mb-0">2 değerlendirme</p>
                  </div>
                </div>
               {orderedProduct && (
                <div>
                  <a className="text-dark text-decoration-underline" href=""> Yorum Yazın</a>
                </div>
               )}
              </div>
              <div className="review-form py-4">
                <h4>Yorum yazın</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars count={5} size={24} value="5" edit={true}  activeColor="#ffd700" />
                  </div>
                  <div>
                    <textarea 
                    name="" 
                    id="" 
                    className="w-100 form-control"
                    cols="30" 
                    rows="4"
                    placeholder ="Mesajınız"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">
                      Değerlendirmeyi Gönder
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">kişi</h6>
                    <ReactStars count={5} size={24} value="5" edit={true}  activeColor="#ffd700" />
                  </div>
                  <p className="mt-3">asdadasdasd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popüler Eserler</h3>
          </div>
          </div>
          <div className="row">
          <ProductCard />
          </div>
      </Container>
    </>
  );
}

export default SingleProduct