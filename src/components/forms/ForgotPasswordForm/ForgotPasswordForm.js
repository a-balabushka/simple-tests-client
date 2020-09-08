import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { forgotPasswordInputs } from '../../../utils/inputsKeys'
import { forgotPasswordSchemas } from '../../../utils/validation/keys/user'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { chooseError } from '../../../utils/helper'
import Spinner from '../../UI/Spinner/Spinner'
import validation from '../../../utils/validation/validation'

class ForgotPasswordForm extends Component {
	state = {
		data: {
			email: '',
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
		const validationResult = validation(data, forgotPasswordSchemas)
		validationResult
			? this.setState({ validationResult })
			: this.props.submit(data.email)
	}

	clearValidationResult = () => this.setState({ validationResult: null })

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				{forgotPasswordInputs.map((item) => {
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
						<Button isLink={false} to="" text="Continue" />
					)}
				</div>
			</form>
		)
	}
}

ForgotPasswordForm.propTypes = {
	loading: PropTypes.bool.isRequired,
	serverError: PropTypes.shape({
		email: PropTypes.string,
	}),
	submit: PropTypes.func.isRequired,
}

ForgotPasswordForm.defaultProps = {
	serverError: null,
}

export default ForgotPasswordForm
