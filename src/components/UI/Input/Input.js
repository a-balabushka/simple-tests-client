import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = (props) => {
	const infoIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className="error-info-icon"
		>
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
		</svg>
	)

	return (
		<div className="input-container">
			<label
				className={props.error ? 'label__error' : 'label'}
				htmlFor={props.label}
			>
				{props.text}:
			</label>
			<input
				className={props.error ? 'input__error' : 'input'}
				type={props.type}
				name={props.label}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
			{props.error ? (
				<div className="inline-error">
					{infoIcon}
					<span>{props.error}</span>
				</div>
			) : null}
		</div>
	)
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
}

Input.defaultProps = {
	error: null,
}

export default Input
