import React from 'react';
import createClass from 'create-react-class';
import { Grid, Row, Col } from 'react-bootstrap';
import { render } from 'react-dom';
import Header from './Header';
import InputComponent from './InputComponent';
import TodoList from './TodoList';

const Todo = createClass({
  getInitialState () {
    return {
      itemList: []
    }
  },
  addItemList (value) {
    this.setState((prevState) => {
      return {
        itemList: prevState.itemList.concat({value, id: Date.now(), completed: false})
      }
    })
  },
  deleteItemList (id) {
    const newItemList = this.state.itemList.filter((item) => item.id!==id);
    this.setState({
      itemList: newItemList
    })
  },
  completeItemList (id) {
    const newItemList = this.state.itemList.map((item) => {
      if(item.id===id) {
        return {
          id: item.id,
          value: item.value,
          completed: true
        }
      } else {
        return item;
      }
    });
    this.setState({
      itemList: newItemList
    })
  },
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col mdOffset={3} md={6}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col mdOffset={4} md={6}>
            <InputComponent onSubmit={this.addItemList} />
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{marginTop:'20px'}}>
            <TodoList workItems = {this.state.itemList} deleteItem={this.deleteItemList} completeItem={this.completeItemList}/>
          </Col>
        </Row>
      </Grid>
    )
  }
});

render(<Todo />, document.getElementById('root'));
