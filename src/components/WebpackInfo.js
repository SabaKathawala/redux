import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

/**
 *
 * @param onClick
 * @param completed
 * @param text
 * @returns {*}
 * @constructor
 *
 * WebPackInfo is a button that shows a Webpack fact.
 *   onClick() is a callback to invoke when the button is clicked.
 */

const WebPackInfo = () => (
    <Accordion>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Webpack Fun Fact. Click me!
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    Webpack fun fact: Right click and do <strong>Inspect element</strong>.
                    You will see a <em><code>&lt;script type="text/javascript" src="main.js">&lt;/script></code></em>.
                    This was added by webpack.
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
);

export default WebPackInfo