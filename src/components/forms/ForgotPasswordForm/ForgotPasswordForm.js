import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ForgotPasswordForm extends Component {
	state = {
		data: {
			email: '',
		},
		loading: false,
		errors: {},
	}

	onChange = (e) =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
		})

	onSubmit = (event) => {
		event.preventDefault()
		this.props.submit(this.state.data)
	}

	render() {
		const { data } = this.state

		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="example@example.com"
						value={data.email}
						onChange={this.onChange}
					/>
				</div>
				<button>Continue</button>
			</form>
		)
	}
}

ForgotPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired,
}

export default ForgotPasswordForm
