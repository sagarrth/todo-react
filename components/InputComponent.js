import React from 'react';
import createClass from 'create-react-class';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const InputComponent = createClass({
  getInitialState () {
    return {
      text: ''
    }
  },
  handleTextChange (event) {
    this.setState({
      text: event.target.value
    })
  },
  handleTextSubmit (event) {
    event.preventDefault();
    this.setState({
      text:''
    });
    this.props.onSubmit(this.state.text);
  },
  render () {
    return (
      <section>
        <Form inline onSubmit={this.handleTextSubmit}>
          <FormGroup bsSize="large">
            <FormControl type='text' value={this.state.text} onChange={this.handleTextChange} />
          </FormGroup>
          {' '}
          <Button bsStyle="primary" bsSize="large" onClick={this.handleTextSubmit}>Add</Button>
        </Form>
      </section>
    );
  }
});

export default InputComponent;
