import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import ListGroup from 'react-bootstrap/ListGroup'

/**
 *
 * @param todos
 * @param onTodoClick
 * @returns {*}
 * @constructor
 *
 * TodoList is a list showing visible todos.
 *  todos: Array is an array of todo items with { id, text, completed } shape.
 *  onTodoClick(id: number) is a callback to invoke when a todo is clicked.
 */

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ListGroup>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ListGroup>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoList