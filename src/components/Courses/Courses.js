import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = './fakeDataLoad.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="courses-banner d-flex align-items-center justify-content-center text-light">
                <h1 className="courses-title">All Courses</h1>
            </div>
            <Container className="mt-5">
                <Row className="">
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}></Course>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Courses;