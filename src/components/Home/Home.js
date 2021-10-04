import React from 'react';
// import { useEffect } from 'react-dom';
import './Home.css';
import Banner from '../../Banner.png';


const Home = () => {

    return (
        <div>
            {/* this is header banner section start  */}
            <div className="row banner-section overflow-hiden">
                <div className="col-lg-6 col-md-6 col-sm-12 banner-content p-5 d-flex align-items-center">
                    <div className="text-start">
                        <p className="fw-bold">Popular Online Courses</p>
                        <h1 className="mt-5 banner-title">The New Way To Learn Properly in With Us!</h1>
                        <button className="regular-btn mt-5">Get Started</button>
                    </div>
                </div>
                {/* banner img section  */}
                <div className="col-lg-6 col-md-6 col-sm-12 banner-img">
                    <img className="img-fluid" src={Banner} alt="" />
                </div>
            </div>
            {/* header banner section end */}


        </div>
    );
};

export default Home;