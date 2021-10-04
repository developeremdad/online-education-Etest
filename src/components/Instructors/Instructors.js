import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        const url = './fakeDataLoad.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <div>
                <h1 style={
                    {
                        background: "#2a2c7f",
                        height: "10rem",
                        fontSize: "60px"
                    }} className="d-flex align-items-center justify-content-center text-light">All Instructors</h1>
            </div>
            <Container className="mt-5">
                <Row className="">
                    {
                        instructors.map(instructor => <Instructor
                            key={instructor.key}
                            instructor={instructor}></Instructor>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Instructors;