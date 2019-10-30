import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

/**
 *
 * @returns {*}
 * @constructor
 *
 * The root component
 */
const App = () => (
    <Container>
        <Row>
            <Col>
                <PageHeader app_name={'Todo App'} />
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <AddTodo />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <VisibleTodoList />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <PageFooter />
            </Col>
        </Row>
    </Container>
);

export default App