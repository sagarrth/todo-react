import React from 'react';
import createClass from 'create-react-class';
import { ListGroup, ListGroupItem, Table, Button } from 'react-bootstrap';

const TodoList = createClass({
  prepareRows () {
    let data = this.props.workItems.map((item) => {
      let aStyle = {};
      aStyle.textDecoration = item.completed ? 'line-through' : 'none';
      return (
        <tr key={item.id}>
          <td style={{width:'95%'}}>
            <a onClick={this.props.completeItem.bind(null, item.id)} style={aStyle}>
              {item.value}
            </a>
          </td>
          <td style={{width:'5%'}}><Button bsStyle="danger" onClick={this.props.deleteItem.bind(null, item.id)}>Delete</Button></td>
        </tr>
      )
    });
    return data;
  },
  render () {
    return (
      <div>
        <Table striped bordered condensed hover>
          <tbody>
            {this.prepareRows()}
          </tbody>
        </Table>
      </div>
    );
  }
});

export default TodoList;
