import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
	resetPasswordRequestRequest,
	resetPasswordRequestFailure,
	resetPasswordRequestSuccess,
} from '../../store/actions/user/auth'
import { getError, getLoading } from '../../store/selectors/user'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm/ForgotPasswordForm'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'

class ForgotPasswordPage extends Component {
	state = {
		success: false,
	}

	submit = (data) =>
		this.props
			.resetPasswordRequest(data)
			.then(() => {
				this.props.resetPasswordSuccess()
				this.setState({ success: true })
			})
			.catch((error) => this.props.resetPasswordFailure(error))

	render() {
		return (
			<>
				<TabTitle title="Forgot password" />
				<ContainerWithArt>
					<h1>Forgot password</h1>
					{this.state.success ? (
						<h3>Email has been sent.</h3>
					) : (
						<ForgotPasswordForm
							submit={this.submit}
							loading={this.props.loading}
							serverError={this.props.error}
						/>
					)}
					<br />
				</ContainerWithArt>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: getLoading(state),
		error: getError(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetPasswordRequest: (data) => dispatch(resetPasswordRequestRequest(data)),
		resetPasswordSuccess: () => dispatch(resetPasswordRequestSuccess()),
		resetPasswordFailure: (error) => dispatch(resetPasswordRequestFailure(error)),
	}
}

ForgotPasswordPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	error: PropTypes.shape({
		email: PropTypes.string,
	}),
	resetPasswordRequest: PropTypes.func.isRequired,
	resetPasswordSuccess: PropTypes.func.isRequired,
	resetPasswordFailure: PropTypes.func.isRequired,
}

ForgotPasswordPage.defaultProps = {
	error: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage)
