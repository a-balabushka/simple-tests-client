import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { email, password } from '../../../utils/inputsKeys'
import loginFormValidation from './LoginFormValidation'
import makeValidationMessage from '../../../utils/makeValidationMessage'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Spinner/Spinner'

class LoginForm extends Component {
	state = {
		data: {
			email: '',
			password: '',
		},
		validationResult: null,
	}

	onChange = (e) =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
		})

	onSubmit = (event) => {
		event.preventDefault()
		this.clearValidationResult()
		const { data } = this.state
		const validationResult = loginFormValidation(data)

		if (validationResult) {
			this.setState({
				validationResult: makeValidationMessage(validationResult),
			})
		} else {
			this.props.submit(data)
		}
	}

	clearValidationResult = () =>
		this.setState({
			...this.state.data,
			validationResult: null,
		})

	makeError = (obj, key) => (obj ? obj[key] : null)

	render() {
		const inputs = [email, password]
		return (
			<form onSubmit={this.onSubmit}>
				{inputs.map((item) => {
					const { label, type, placeholder } = item
					const { validationResult } = this.state
					const { serverError } = this.props
					const value = this.state.data[label]

					const error =
						this.makeError(validationResult, label) ||
						this.makeError(serverError, label) || null

					return (
						<Input
							label={label}
							type={type}
							placeholder={placeholder}
							value={value}
							onChange={this.onChange}
							error={error}
							key={label}
						/>
					)
				})}
				<div className="button-container">
					{this.props.loading ? (
						<Spinner />
					) : (
						<Button isLink={false} to="" text="Log In" />
					)}
				</div>
			</form>
		)
	}
}

LoginForm.propTypes = {
	loading: PropTypes.bool.isRequired,
	serverError: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	submit: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
	serverError: null,
}

export default LoginForm
