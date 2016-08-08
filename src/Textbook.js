import React from 'react';
import {ListGroupItem, FormGroup, ControlLabel, FormControl, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import CourseActions from './CourseActions';

class Textbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: props.textbook.title,
            author: props.textbook.author
        }
    }
    handleEdit() {
        this.setState({
            editing: true,
            title: this.props.textbook.title,
            author: this.props.textbook.author
        });
    }
    handleTitleChanged(e) {
        this.setState({title: e.target.value});
    }
    handleAuthorChanged(e) {
        this.setState({author: e.target.value});
    }
    handleSaveChanges() {
        CourseActions.updateTextbook(this.props.textbook, {
            title: this.state.title,
            author: this.state.author
        });
    }
    handleDiscardChanges() {
        this.setState({editing: false});
    }
    render() {
        return (
            <ListGroupItem className="textbook">
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
                    <ControlLabel>Title:</ControlLabel>
                    {this.state.editing
                        ?
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Title"
                            onChange={this.handleTitleChanged.bind(this)}
                        />
                        :
                        <FormControl.Static>
                            {this.props.textbook.title}
                        </FormControl.Static>
                    }
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Author:</ControlLabel>
                    {this.state.editing
                        ?
                        <FormControl
                            type="text"
                            value={this.state.author}
                            placeholder="Author"
                            onChange={this.handleAuthorChanged.bind(this)}
                        />
                        :
                        <FormControl.Static>
                            {this.props.textbook.author}
                        </FormControl.Static>
                    }
                </FormGroup>
            </ListGroupItem>
        );
    }
}

export default Textbook;
