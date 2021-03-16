import React from 'react';
import ToDo from '../components/ToDo';
import { toggleToDo } from '../actions';
import { connect } from 'react-redux';

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);

    default:
      return new Error('Unknown filter: ' + filter);
  }
}

const ToDoList = ({todos, onToDoClick}) => {
  const displayTodos = todos.map(todo => {
    return (
      <ToDo
        {...todo}
        key={todo.id}
        toggleToDo={() => onToDoClick(todo.id)}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  onToDoClick: id => dispatch( toggleToDo(id) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
