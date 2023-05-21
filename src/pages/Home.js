import React from 'react';
import {Link} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container"
import {services} from "../utils/Data"

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" 
                className="img-fluid rounded-3"
               alt="main-banner"/>
               <div className="main-banner-content position-absolute">
                <h4>Günün Eserİ</h4>
                <h5>Eserin adı</h5>
                <p>eserin fiyatı</p>
                <Link className="button">Satın Al</Link>
               </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" 
                  className="img-fluid rounded-3"
                 alt="main-banner"/>
                 <div className="small-banner-content position-absolute">
                  <h4>Günün Eserİ</h4>
                  <h5>Eserin adı</h5>
                  <p>eserin fiyatı</p>
                  <Link className="button">Satın Al</Link>
                 </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" 
                  className="img-fluid rounded-3"
                 alt="main-banner"/>
                 <div className="small-banner-content position-absolute">
                  <h4>Günün Eserİ</h4>
                  <h5>Eserin adı</h5>
                  <p>eserin fiyatı</p>
                  <Link className="button">Satın Al</Link>
                 </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" 
                  className="img-fluid rounded-3"
                 alt="main-banner"/>
                 <div className="small-banner-content position-absolute">
                  <h4>Günün Eserİ</h4>
                  <h5>Eserin adı</h5>
                  <p>eserin fiyatı</p>
                  <Link className="button">Satın Al</Link>
                 </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" 
                  className="img-fluid rounded-3"
                 alt="main-banner"/>
                 <div className="small-banner-content position-absolute">
                  <h4>Günün Eserİ</h4>
                  <h5>Eserin adı</h5>
                  <p>eserin fiyatı</p>
                  <Link className="button">Satın Al</Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between"> 
              { services?.map((i,j) => {
                return (
                <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="services"/>
                  <div>
                    <h6>{i.title}</h6>
                    <p className="mb-0"> {i.tagline}</p>
                  </div>
                </div>
                );
              })}
            </div> 
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Resim</h6>
                    <p>10 Resim</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Heykel</h6>
                    <p>10 heykel</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Seramik</h6>
                    <p>10 Serami</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>El işi</h6>
                    <p>10 el işi</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Resim</h6>
                    <p>10 Resim</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Heykel</h6>
                    <p>10 heykel</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Seramik</h6>
                    <p>10 Serami</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>El işi</h6>
                    <p>10 el işi</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Öne Çıkanlar</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Özel Ürünler</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
    </Container>
      </>
  )
};

export default Home;