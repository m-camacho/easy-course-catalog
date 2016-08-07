import React from 'react';
import _ from 'lodash';
import {Panel, FormGroup, ControlLabel, FormControl, ListGroup} from 'react-bootstrap';
import Textbook from './Textbook';

class Course extends React.Component {
    render() {
        return (
            <Panel className="course">
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
                {
                    _.isEmpty(this.props.course.textbooks)
                    ? null
                    : <FormGroup>
                        <ControlLabel>Textbooks:</ControlLabel>
                        <ListGroup>
                            {_.map(this.props.course.textbooks, (textbook) =>
                                <Textbook
                                    key={textbook.author + textbook.title}
                                    textbook={textbook}
                                />
                            )}
                        </ListGroup>
                    </FormGroup>
                }
            </Panel>
        );
    }
}

export default Course;
