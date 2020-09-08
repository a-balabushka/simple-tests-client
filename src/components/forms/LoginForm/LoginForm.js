import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loginInputs } from '../../../utils/inputsKeys'
import validation from '../../../utils/validation/validation'
import { loginSchemas } from '../../../utils/validation/keys/user'
import { chooseError } from '../../../utils/helper'
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
		const validationResult = validation(data, loginSchemas)
		validationResult
			? this.setState({ validationResult })
			: this.props.submit(data)
	}

	clearValidationResult = () => this.setState({ validationResult: null })

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				{loginInputs.map((item) => {
					const errorProp = [
						this.state.validationResult,
						this.props.serverError,
						item.label,
					]
					const arg = {
						...item,
						value: this.state.data[item.label],
						onChange: this.onChange,
						error: chooseError(...errorProp),
					}

					return <Input {...arg} key={item.label} />
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
