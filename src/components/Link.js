import React from 'react'
import PropTypes from 'prop-types'

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
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link