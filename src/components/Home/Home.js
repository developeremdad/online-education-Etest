import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../../Banner.png';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import { useHistory } from 'react-router';


const Home = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/courses")
    }

    const [courses, setCourses] = useState([]);
    // const newCourses = courses.slice(0, 6);

    useEffect(() => {
        const url = './fakeDataLoad.json'
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
                <Container style={{ margin: "80px auto" }} className="mt-5">
                    <Row className="">
                        {
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