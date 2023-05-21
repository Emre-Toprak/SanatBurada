import React from 'react'
import {Link} from 'react-router-dom';
import {BsLinkedin, BsInstagram, BsTwitter, BsPinterest} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter"/>
              <h2 className="mb-0 text-white">Bültenimize Abone Olun</h2>
            </div>
          </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" 
                placeholder="Email adresiniz" 
                aria-label="Email adresiniz" 
                aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Abone olun
                </span>
  
              </div>
            </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Bize Ulaşın</h4>
            <div className="footer-links d-flex flex-column text-white">   
                <a href="mailto:info@sanatburada.com"
                className= "mt-4 d-block mb-0 text-white">
                  info@sanatburada.com
                  
                </a> 
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsTwitter className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                   <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsPinterest className="fs-4" />
                  </a>
                </div>  
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Bilgi</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Gizlilik Politikası</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">İade Şartları</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Kargo Bilgisi</Link>
              <Link to="/term-and-conditions" className="text-white py-2 mb-1">Hizmet Kullanım Şartları</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Hesap</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Arama</Link>
              <Link className="text-white py-2 mb-1">Hakkımızda</Link>
              <Link className="text-white py-2 mb-1">Sss</Link>
              <Link className="text-white py-2 mb-1">Öneri ve Şikayetler</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Linkler</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Resim</Link>
              <Link className="text-white py-2 mb-1">Heykel</Link>
              <Link className="text-white py-2 mb-1">Seramik</Link>
              <Link className="text-white py-2 mb-1">Diğer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} powered by Emre The Sculptor </p>
          </div>
        </div>
      </div>

    </footer>
    </>
  );
};

export default Footer