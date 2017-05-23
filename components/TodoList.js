import React from 'react';

const TodoList = React.createClass({
  render () {
    return (
      <div>
        <ul>
          {this.props.workItems.map((item) => {
            return <li key={item.id}>{item.value}</li>
          })}
        </ul>
      </div>
    );
  }
});

export default TodoList;
