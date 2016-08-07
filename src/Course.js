import React from 'react';
import _ from 'lodash';
import {
    Panel,
    ButtonGroup,
    Button,
    Glyphicon,
    FormGroup,
    ControlLabel,
    FormControl,
    ListGroup} from 'react-bootstrap';
import Textbook from './Textbook';
import CourseActions from './CourseActions';

class Course extends React.Component {
    deleteCourse() {
        CourseActions.deleteCourse(this.props.course);
    }
    render() {
        return (
            <Panel className="course">
                <ButtonGroup className="buttons">
                    <Button bsSize="xsmall" bsStyle="primary">
                        <Glyphicon glyph="pencil"/>
                    </Button>
                    <Button bsSize="xsmall" bsStyle="danger" onClick={this.deleteCourse.bind(this)}>
                        <Glyphicon glyph="trash"/>
                    </Button>
                </ButtonGroup>
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
