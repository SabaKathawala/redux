import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

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

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList