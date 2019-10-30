import React from 'react'
import PropTypes from 'prop-types'
import Button from "react-bootstrap/Button";

/**
 *
 * @param active
 * @param children
 * @param onClick
 * @returns {*}
 * @constructor
 *
 * Link is a link with a callback.
 *   onClick() is a callback to invoke when the link is clicked.
 */

const Link = ({ active, children, onClick }) => (
    <Button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
        variant={getVariant(children)}
    >
        {children}
    </Button>
);

const getVariant = (children) => {
    console.log(children);
    switch(children) {
        case 'Active':
            return 'outline-primary';
        case 'All':
            return 'outline-info';
        case 'Completed':
            return 'outline-success';
        default:
            return 'outline-light';
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link