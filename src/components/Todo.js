import React from 'react';
import PropTypes from 'prop-types';
import DeleteTodo from "./DeleteTodo";
import {ListGroup, Row, Col} from "react-bootstrap";

/**
 *
 * @param id
 * @param onClick
 * @param completed
 * @param text
 * @param deleteTodo
 * @returns {*}
 * @constructor
 *
 * Todo is a single todo item.
 *   id: id of the todo
 *   text: string is the text to show.
 *   completed: boolean is whether the todo should appear crossed out.
 *   onClick() is a callback to invoke when the todo is clicked.
 *   deleteTodo: reducer to delete Todo
 */

const Todo = ({ completed, deleteTodo, id, text, onClick }) => (
    <ListGroup.Item>
        <Row>
            <Col md={6}>
                <span
                    onClick={onClick}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none',
                        cursor: "pointer"
                    }}
                >
                    {text}
                </span>
            </Col>
            <Col md={2}>
                <DeleteTodo onClick={() => deleteTodo(id)} />
            </Col>
        </Row>
    </ListGroup.Item>
);

Todo.propTypes = {
    completed: PropTypes.bool,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;