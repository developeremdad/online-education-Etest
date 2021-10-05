import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Button, NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Course.css';

const Course = (props) => {
    const { img, price, reveiw, batch, service, description } = props.course;
    const history = useHistory();

    const handleClick = () => {
        history.push("/courses");
        // window.location.reload();
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
                    <ListGroupItem><i className="fas fa-money-check-alt text-success"></i><strong> Price: </strong>${price}</ListGroupItem>
                    <ListGroupItem><i className="fas fa-user-graduate text-success"></i> <strong>Batch: </strong>{batch}</ListGroupItem>
                    <ListGroupItem><i className="fas fa-users text-success"></i> <strong>Review: </strong>{reveiw}</ListGroupItem>
                </ListGroup>
                <Card.Body >
                    <NavLink className="d-inline"><Button variant="success">Enroll Now</Button></NavLink>
                    <NavLink className="d-inline"><Button onClick={handleClick} variant="info">All Courses</Button></NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;