import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container row p-4">
                <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <p className="text-white fs-4">Stay Updated</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2" />
                        <button className="btn btn-success" type="button" id="button-addon2">Subscribe Now</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <p className="text-white fs-4">Let’s Get Social</p>
                    <span><i className="fab fa-facebook-square fs-1 m-2 text-light footer-icon"></i></span>
                    <span><i className="fab fa-whatsapp-square fs-1 m-2 text-light footer-icon"></i></span>
                    <span><i className="fab fa-twitter-square fs-1 m-2 text-light footer-icon"></i></span>
                    <span><i className="fab fa-instagram-square fs-1 m-2 text-light footer-icon"></i></span>
                    <span><i className="fab fa-youtube-square fs-1 m-2 text-light footer-icon"></i></span>
                </div>
            </div>
            <hr className="border" />
            <p className="text-light pt-3">Copyright &copy; 2021 All rights reserved | Md Emdadullah</p>
        </div>
    );
};

export default Footer;