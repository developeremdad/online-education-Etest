import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instructor = (props) => {
    const { teacherImg, teacher, rate, service } = props.instructor;
    return (

        <Col xs={12} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" className="card-image" src={teacherImg} />
                <Card.Body>
                    <Card.Title className="text-success  fs-3">{teacher}</Card.Title>
                    <Card.Text>
                        Course: {service}
                    </Card.Text>
                    <Card.Text>Rating: {rate} <i className="fas fa-star text-warning"></i></Card.Text>
                </Card.Body>

            </Card>
        </Col>

    );
};

export default Instructor;