import React from 'react';

const InputComponent = React.createClass({
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
        <form onSubmit={this.handleTextSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleTextChange} />
        </form>
      </section>
    );
  }
});

export default InputComponent;
