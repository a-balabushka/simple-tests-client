import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { signupInputs } from '../../../utils/inputsKeys'
import validation from '../../../utils/validation/validation'
import { signupSchemas } from '../../../utils/validation/keys/user'
import { chooseError } from '../../../utils/helper'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Spinner/Spinner'

class SignupForm extends Component {
	state = {
		data: {
			email: '',
			password: '',
			username: '',
			firstName: '',
			lastName: '',
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
		const validationResult = validation(data, signupSchemas)
		validationResult
			? this.setState({ validationResult })
			: this.props.submit(this.changeStringRegistr(data))
	}

	changeStringRegistr = (data) => {
		return {
			...this.state.data,
			email: data.email.toLowerCase(),
			username: data.username.toLowerCase(),
			firstName: this.changeNameRegistr(data.firstName),
			lastName: this.changeNameRegistr(data.lastName),
		}
	}


	changeNameRegistr = (name) =>
		name[0].toUpperCase() + name.substr(1).toLowerCase()

	clearValidationResult = () => this.setState({ validationResult: null })

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				{signupInputs.map((item) => {
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
						<Button isLink={false} to="" text="Sign Up" />
					)}
				</div>
			</form>
		)
	}
}

SignupForm.propTypes = {
	loading: PropTypes.bool.isRequired,
	serverError: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	submit: PropTypes.func.isRequired,
}

SignupForm.defaultProps = {
	serverError: null,
}

export default SignupForm
