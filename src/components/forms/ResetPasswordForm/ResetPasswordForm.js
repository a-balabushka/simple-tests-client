import React, { Component } from 'react'
import PropTypes from 'prop-types'
import validation from '../../../utils/validation/validation'
import { resetPasswordSchemas } from '../../../utils/validation/keys/user'
import { resetPasswordInputs } from '../../../utils/inputsKeys'
import { chooseError } from '../../../utils/helper'
import Input from '../../UI/Input/Input'
import Spinner from '../../UI/Spinner/Spinner'
import Button from '../../UI/Button/Button'

class ResetPasswordForm extends Component {
	state = {
		data: {
			password: '',
			passwordConfirmation: '',
		},
		validateResult: null,
	}

	onChange = (e) =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value },
		})

	onSubmit = (event) => {
		event.preventDefault()
		this.clearValidationResult()
		const { data } = this.state
		if (data.password === data.passwordConfirmation) {
			const validationResult = validation(data, resetPasswordSchemas)
			validationResult
				? this.setState({ validationResult })
				: this.props.submit({
					password: data.password,
					token: this.props.token
				})
		} else {
			this.setState({
				validationResult: { passwordConfirmation: 'Passwords must match' }
			})
		}
	}

	clearValidationResult = () => this.setState({ validationResult: null })

	render() {
		const { loading } = this.props

		return (
			<div>
				{loading ? (
					<div>loading...</div>
				) : (
					<form onSubmit={this.onSubmit}>
						{resetPasswordInputs.map((item) => {
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
							{loading ? (
								<Spinner />
							) : (
								<Button isLink={false} to="" text="Reset" />
							)}
						</div>
					</form>
				)}
			</div>
		)
	}
}

ResetPasswordForm.propTypes = {
	loading: PropTypes.bool.isRequired,
	token: PropTypes.string.isRequired,
	serverError: PropTypes.shape({
		token: PropTypes.string,
	}),
	submit: PropTypes.func.isRequired,
}

ResetPasswordForm.defaultProps = {
	serverError: null,
}

export default ResetPasswordForm
