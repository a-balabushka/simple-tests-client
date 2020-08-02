import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Button.scss'

const Button = (props) => {
	return (
		<button>
			<Link to={props.to}>{props.text}</Link>
		</button>
	)
}

Button.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Button
