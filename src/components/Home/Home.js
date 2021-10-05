import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import Banner from '../../Banner.png';
import Course from '../Course/Course';


const Home = () => {
    // button hander function 
    const history = useHistory()
    const handleClick = () => {
        history.push("/courses")
    }
    // state decleare for all courses 
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const url = './fakeDataLoad.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {/* this is header banner section start  */}
            <div className="row banner-section overflow-hiden">
                <div className="col-lg-6 col-md-6 col-sm-12 banner-content p-5 d-flex align-items-center">
                    <div className="text-start">
                        <p className="fw-bold">Popular Online Courses</p>
                        <h1 className="mt-5 banner-title">The New Way To Learn Properly in With Us!</h1>
                        <button onClick={handleClick} className="regular-btn mt-5">Get Started</button>
                    </div>
                </div>
                {/* banner img section  */}
                <div className="col-lg-6 col-md-6 col-sm-12 banner-img">
                    <img className="img-fluid" src={Banner} alt="" />
                </div>
            </div>
            {/* header banner section end */}



            {/* display courses section start  */}
            <div>
                {/* courses title  */}
                <div className="courses-title-container d-flex align-items-center justify-content-center text-light">
                    <h1 className="title">Most Popular Courses</h1>
                </div>
                {/* all courses  */}
                <Container style={{ margin: "80px auto" }} className="mt-5">
                    <Row className="">
                        {
                            // send Data to Course component 
                            courses.slice(0, 6).map(course => <Course
                                key={course.key}
                                course={course}></Course>)
                        }
                    </Row>
                    <button onClick={handleClick} className="regular-btn mt-5">Find More Courses</button>
                </Container>

            </div>

        </div >
    );
};

export default Home;