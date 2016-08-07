import React from 'react';
import _ from 'lodash';
import {Row, Col, ListGroup} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Course from './Course';

let courses = [
    {
        "id": "123",
        "name": "Introduction to Advertising",
        "description": "Learn about advertising",
        "textbooks": [
            {
                "author": "Joe Smith",
                "title": "Mobile Advertising Fundamentals"
            },
            {
                "author": "Eli Hinnegan",
                "title": "Introduction to Location-Based Advertising"
            },
            {
                "author": "Edward Bernays",
                "title": "Public Relations"
            },
        ]
    },
    {
        "id": "654",
        "name": "Introduction to React.js programming",
        "description": "React.js for begginers"
    }
];

class App extends React.Component {
    render() {
        return (
            <Row className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Easy Course</h2>
                    <h6>Practical tool to help you to manage your courses</h6>
                </div>
                <Col xs={12} md={6} mdOffset={3} className="main-container">
                    <ListGroup className="course-list">
                        {_.map(courses, (course) => <Course key={course.id} course={course} />)}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default App;
