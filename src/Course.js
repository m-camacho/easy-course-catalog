import React from 'react';
import {ListGroupItem, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class Course extends React.Component {
    render() {
        return (
            <ListGroupItem className="course">
                <FormGroup>
                    <ControlLabel>Course Name:</ControlLabel>
                    <FormControl.Static>
                        {this.props.course.name}
                    </FormControl.Static>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description:</ControlLabel>
                    <FormControl.Static>
                        {this.props.course.description}
                    </FormControl.Static>
                </FormGroup>
            </ListGroupItem>
        );
    }
}

export default Course;
