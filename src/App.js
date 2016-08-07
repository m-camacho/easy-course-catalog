import React from 'react';
import _ from 'lodash';
import {Row, Col} from 'react-bootstrap';
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
            <div className="app">
                <Row className="app-header">
                    <Col className="app-logo" xs={2} md={3}>
                        <img src={logo} className="logo" alt="logo" />
                    </Col>
                    <Col xs={10} md={9}>
                        <h2>Easy Course</h2>
                        <h6>Practical tool to help you to manage your courses</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} mdOffset={3} className="main-container">
                        <div className="course-list">
                            {_.map(courses, (course) => <Course key={course.id} course={course} />)}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
