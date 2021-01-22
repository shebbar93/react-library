import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color }) => {
    return (
        <button className='btn' style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Add',
    backgroundColor: '#111111'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
}
export default Button
