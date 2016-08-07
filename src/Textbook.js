import React from 'react';
import _ from 'lodash';
import {ListGroupItem, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class Textbook extends React.Component {
    render() {
        return (
            <ListGroupItem className="textbook">
                <FormGroup>
                    <ControlLabel>Title:</ControlLabel>
                    <FormControl.Static>
                        {this.props.textbook.title}
                    </FormControl.Static>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Author:</ControlLabel>
                    <FormControl.Static>
                        {this.props.textbook.author}
                    </FormControl.Static>
                </FormGroup>
            </ListGroupItem>
        );
    }
}

export default Textbook;
