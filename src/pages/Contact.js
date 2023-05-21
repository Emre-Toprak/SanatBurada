import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi"
import Container from "../components/Container"
const Contact = () => {
  return (
    <>
    <Meta title= {"Contact"} />
    <BreadCrumb title = "Contact"/>
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48219.4423941043!2d29.114343916371812!3d40.94390971776202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4336e39827f%3A0x608e0ae971e8ddc2!2sMaltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1683632185810!5m2!1str!2str" 
            width="600" 
            height="450" 
            className="border-0 w-100" 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Bize ulaşın</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="İsim"/>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Tel No"/>
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
                  <div>
                    <button className="button border-0">
                      Gönder
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">İletişim</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5"/> 
                      <address className="mb-0"> adres</address>
                    </li> 
                    <li className="mb-3 d-flex gap-15 align-items-center"> 
                      <BiPhoneCall className="fs-5"/>
                      <a href="000000000">00000000</a>
                    </li>

                    <li className="mb-3 d-flex gap-15 align-items-center"> 
                      <AiOutlineMail className="fs-5"/>
                      <a href="mailto:info@sanatburada.com">info@sanatburada.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5"/>
                      <p className="m-0">Çalışma saatleri:
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  );
}

export default Contact