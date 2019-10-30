import React from 'react'
import { connect } from 'react-redux'
import {addTodo, setVisibilityFilter, VisibilityFilters} from '../actions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button, Form} from "react-bootstrap";

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <Row>
            <Col>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addTodo(input.value));
                        input.value = '';
                        //once added, the view should be set to All Todos to see the update
                        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
                    }}
                >
                    <Row>
                        <Col>
                            <Form.Control ref={node => (input = node)} type="text" placeholder="Todo text here: Have fun!!" />
                        </Col>
                        <Col>
                            <Button variant={'primary'} type="submit">Add Todo</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
};

export default connect()(AddTodo)