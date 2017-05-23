import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import InputComponent from './InputComponent';
import TodoList from './TodoList';

const Todo = React.createClass({
  getInitialState () {
    return {
      itemList: []
    }
  },
  updateItemList (value) {
    this.setState((prevState) => {
      return {
        itemList: prevState.itemList.concat({value, id: Date.now()})
      }
    })
  },
  render () {
    return (
      <div>
        <Header />
        <InputComponent onSubmit={this.updateItemList} />
        <TodoList workItems = {this.state.itemList}/>
      </div>
    )
  }
});

render(<Todo />, document.getElementById('root'));
