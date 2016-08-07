import React from 'react';
import _ from 'lodash';
import {Row, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Course from './Course';
import CourseStore from './CourseStore';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: CourseStore.getInitialState()
        }
    }
    onStatusChange(courses) {
        this.setState({courses});
    }
    componentDidMount() {
        this.unsubscribe = CourseStore.listen(this.onStatusChange.bind(this));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
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
                            {_.map(this.state.courses, (course) => <Course key={course.id} course={course} />)}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
