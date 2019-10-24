import React from 'react';
import PropTypes from 'prop-types';
import DeleteTodo from "./DeleteTodo";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

/**
 *
 * @param onClick
 * @param completed
 * @param text
 * @returns {*}
 * @constructor
 *
 * Todo is a single todo item.
 *   text: string is the text to show.
 *   completed: boolean is whether the todo should appear crossed out.
 *   onClick() is a callback to invoke when the todo is clicked.
 */

const Todo = ({ id, onClick, completed, text, deleteTodo }) => (
    <ListGroup.Item>
        <Row>
            <Col>
                <span
                    onClick={onClick}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}
                >
                    {text}
                </span>
            </Col>
            <Col>
                <DeleteTodo onClick={() => deleteTodo(id)} />
            </Col>
        </Row>
    </ListGroup.Item>
);

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo