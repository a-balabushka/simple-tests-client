import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetPasswordRequest } from '../../store/actions/user/auth'
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm/ForgotPasswordForm'

class ForgotPasswordPage extends Component {
	state = {
		success: false,
	}

	submit = (data) =>
		this.props.resetPasswordRequest(data).then(() => this.setState({ success: true }))

	render() {
		return (
			<div>
				{this.state.success ? (
					<h3>Email has been sent.</h3>
				) : (
					<ForgotPasswordForm submit={this.submit} />
				)}
			</div>
		)
	}
}

ForgotPasswordPage.propTypes = {
	resetPasswordRequest: PropTypes.func.isRequired,
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage)
