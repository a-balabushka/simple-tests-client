import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Button.scss'

const Button = (props) => {
	const { isLink, to, text } = props
	return isLink ? (
		<Link to={to} className="button-link">
			{text}
		</Link>
	) : (
		<button>{text}</button>
	)
}

Button.propTypes = {
	isLink: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Button
