import React, { Component } from "react";
import PropTypes from "prop-types";

class ResetPasswordForm extends Component {
	state = {
		data: {
			token: this.props.token,
			password: "",
			passwordConfirmation: ""
		},
		loading: false,
		errors: {}
	};

	onChange = e =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data)
				.catch(err =>
					this.setState({ errors: err.response.data.errors, loading: false })
				);
		}
	};

	validate = data => {
		const errors = {};
		if (!data.password) errors.password = "Can't be blank";
		if (data.password !== data.passwordConfirmation)
			errors.password = "Passwords must match";
		return errors;
	};

	render() {
		const { errors, data, loading } = this.state;
		console.log(errors)

		return (
			<div>
				{ loading
					? (<div>loading...</div>)
					: (
					<form onSubmit={this.onSubmit}>
						<div>
							<label htmlFor="password">New Password</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="your new password"
								value={data.password}
								onChange={this.onChange}
							/>
						</div>
						<div>
							<label htmlFor="passwordConfirmation">
								Confirm your new password
							</label>
							<input
								type="password"
								id="passwordConfirmation"
								name="passwordConfirmation"
								placeholder="type it again, please"
								value={data.passwordConfirmation}
								onChange={this.onChange}
							/>
						</div>
						<button>Reset</button>
					</form>
				)}
			</div>
		)
	}
}

ResetPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired
};

export default ResetPasswordForm;
