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
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: props.course.name,
            description: props.course.description
        }
    }
    handleEdit() {
        this.setState({
            editing: true,
            name: this.props.course.name,
            description: this.props.course.description
        });
    }
    handleNameChanged(e) {
        this.setState({name: e.target.value});
    }
    handleDescChanged(e) {
        this.setState({description: e.target.value});
    }
    handleSaveChanges() {
        this.setState({editing: false});
        CourseActions.updateCourse(this.state.name, this.state.description);
    }
    handleDiscardChanges() {
        this.setState({editing: false});
    }
    render() {
        return (
            <Panel className="course">
                {this.state.editing
                    ?
                    <ButtonGroup className="buttons">
                        <Button bsSize="xsmall" bsStyle="primary" onClick={this.handleSaveChanges.bind(this)}>
                            <Glyphicon glyph="ok"/>
                        </Button>
                        <Button bsSize="xsmall" bsStyle="danger" onClick={this.handleDiscardChanges.bind(this)}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </ButtonGroup>
                    :
                    <ButtonGroup className="buttons">
                        <Button bsSize="xsmall" bsStyle="primary" onClick={this.handleEdit.bind(this)}>
                            <Glyphicon glyph="pencil"/>
                        </Button>
                    </ButtonGroup>
                }
                <FormGroup>
                    <ControlLabel>Course Name:</ControlLabel>
                    {this.state.editing
                        ?
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Course name"
                            onChange={this.handleNameChanged.bind(this)}
                        />
                        :
                        <FormControl.Static>
                            {this.props.course.name}
                        </FormControl.Static>
                    }
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description:</ControlLabel>
                    {this.state.editing
                        ?
                        <FormControl
                            type="text"
                            value={this.state.description}
                            placeholder="Course description"
                            onChange={this.handleDescChanged.bind(this)}
                        />
                        :
                        <FormControl.Static>
                            {this.props.course.description}
                        </FormControl.Static>
                    }
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
