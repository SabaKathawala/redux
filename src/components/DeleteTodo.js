import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

/**
 *
 * @param onClick
 * @param completed
 * @param text
 * @returns {*}
 * @constructor
 *
 * DeleteTodo is a button that gives the user an option to delete a todo.
 *   text: string is the text to show.
 *   completed: boolean is whether the todo should appear crossed out.
 *   onClick() is a callback to invoke when the todo is clicked.
 */

const DeleteTodo = ({ onClick }) => (
    <Button
        onClick={onClick}
        variant="danger"
    >
        Delete
    </Button>
);

DeleteTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default DeleteTodo