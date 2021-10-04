import React from 'react';
import aboutImg from '../../about.jpg';
import aboutDescription from '../../aboutDescription.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <img className="w-100" src={aboutImg} alt="" />
            <div className="row">
                {/* About us header bottom section with description */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-start p-4">
                    <div className="p-4">
                        <p className="text-primary mb-4 fw-bold">More About Our institute</p>
                        <h1 className="fw-bold mb-3">Want to know more</h1>
                        <p className="lh-lg">What should I write in company description? Provide your business's basic information Include the basics of your business, such as the origin, name, location, business structure, management, number of employees and hours of operation. It can also be helpful to categorize your business in a specific industry to provide context for the reader.</p>
                        <button className="regular-btn mt-2">Read More About Us</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="img-fluid" src={aboutDescription} alt="" />
                </div>
            </div>

            {/* contact us form section  */}

            <div className="contact-section p-5">
                <h1 className="mb-4">Contact us</h1>
                <div className="w-50 text-start border border-white mx-auto p-3">
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Comments</label>
                        <textarea className="form-control" placeholder="Type Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="regular-btn mt-2">Submit</button>
                </div>

            </div>
        </div>
    );
};

export default About;