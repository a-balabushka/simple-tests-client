import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SignupForm extends Component {
	state = {
		data: {
			email: '',
			password: '',
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
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={data.password}
						onChange={this.onChange}
					/>
				</div>
				<button>Sign Up</button>
			</form>
		)
	}
}

SignupForm.propTypes = {
	submit: PropTypes.func.isRequired,
}

export default SignupForm
