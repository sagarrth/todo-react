import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import InputComponent from './InputComponent';
import TodoList from './TodoList';

const Todo = React.createClass({
  getInitialState () {
    return {
      itemList: [],
      text: ''
    }
  },
  handleTextSubmit (event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        itemList: prevState.itemList.concat({value:this.state.text, id: Date.now()}),
        text: ''
      }
    })
  },
  handleTextChange (event) {
    this.setState({
      text: event.target.value
    })
  },
  render () {
    return (
      <div>
        <Header />
        <section>
          <form onSubmit={this.handleTextSubmit}>
            <input type='text' value={this.state.text} onChange={this.handleTextChange} />
          </form>
        </section>
        <TodoList workItems = {this.state.itemList}/>
      </div>
    )
  }
});

render(<Todo />, document.getElementById('root'));
