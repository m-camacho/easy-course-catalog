import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Course from './Course';
import CourseActions from './CourseActions';
import CourseStore from './CourseStore';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course: CourseStore.getInitialState()
        }
    }
    onStatusChange(course) {
        this.setState({course});
    }
    componentDidMount() {
        this.unsubscribe = CourseStore.listen(this.onStatusChange.bind(this));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleSaveCourse() {
        CourseActions.saveCourse(this.state.course);
    }
    handleDiscardChanges() {
        CourseActions.discardChanges();
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
                        <div className="save-discard-buttons">
                            You can interact with the <b>Course</b> information, although your changes are in memory and you can
                            <Button bsSize="small" bsStyle="link" onClick={this.handleSaveCourse.bind(this)}>
                                save
                            </Button>
                            or
                            <Button bsSize="small" bsStyle="link" onClick={this.handleDiscardChanges}>
                                discard
                            </Button>
                            them.
                        </div>
                        <Course course={this.state.course} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
