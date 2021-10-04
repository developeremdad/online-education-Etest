import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Button, NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Course.css';

const Course = (props) => {
    const { img, price, reveiw, batch, service, description } = props.course;
    const history = useHistory();

    const handleClick = () => {
        history.push("/courses");
    }

    return (
        <Col xs={12} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" className="card-image" src={img} />
                <Card.Body>
                    <Card.Title className="text-primary  fs-3">{service}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)} <span className="read-more"> read more</span>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price: </strong>${price}</ListGroupItem>
                    <ListGroupItem><strong>Batch: </strong>{batch}</ListGroupItem>
                    <ListGroupItem><strong>Review: </strong>{reveiw}</ListGroupItem>
                </ListGroup>
                <Card.Body >
                    <NavLink to="/home" className="d-inline"><Button variant="success">Enroll Now</Button></NavLink>
                    <NavLink to="/courses" className="d-inline"><Button onClick={handleClick} variant="info">All Courses</Button></NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;