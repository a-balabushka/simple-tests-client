import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
	validateTokenRequest,
	validateTokenSuccess,
	validateTokenFailure,
	resetPasswordAcceptRequest,
	resetPasswordAcceptSuccess,
	resetPasswordAcceptFailure,
} from '../../store/actions/user/auth'
import { getError, getLoading } from '../../store/selectors/user'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'
import ResetPasswordForm from '../../components/forms/ResetPasswordForm/ResetPasswordForm'

class ResetPasswordPage extends Component {
	componentDidMount() {
		this.props
			.validateTokenRequest(this.props.match.params.token)
			.then(this.props.validateTokenSuccess())
			.catch((error) => this.props.validateTokenFailure(error))
	}

	submit = (data) =>
		this.props
			.resetPasswordRequest(data)
			.then(() => {
				this.props.resetPasswordSuccess()
				this.props.history.push('/login')
			})
			.catch((error) => this.props.resetPasswordFailure(error))

	render() {
		const { loading, error } = this.props
		const { token } = this.props.match.params

		return (
			<>
				<TabTitle title="Reset password" />
				<ContainerWithArt>
					<h1>Reset password</h1>
					{loading && <div>Loading...</div>}
					{!loading && !error && (
						<ResetPasswordForm
							token={token}
							loading={loading}
							submit={this.submit}
						/>
					)}
					{!loading && error && <div>Invalid Token</div>}
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
		validateTokenRequest: (token) => dispatch(validateTokenRequest(token)),
		validateTokenSuccess: () => dispatch(validateTokenSuccess()),
		validateTokenFailure: (error) => dispatch(validateTokenFailure(error)),
		resetPasswordRequest: (data) => dispatch(resetPasswordAcceptRequest(data)),
		resetPasswordSuccess: () => dispatch(resetPasswordAcceptSuccess()),
		resetPasswordFailure: (error) => dispatch(resetPasswordAcceptFailure(error)),
	}
}

ResetPasswordPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	error: PropTypes.shape({
		global: PropTypes.string,
	}),
	match: PropTypes.shape({
		params: PropTypes.shape({
			token: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	validateTokenRequest: PropTypes.func.isRequired,
	validateTokenSuccess: PropTypes.func.isRequired,
	validateTokenFailure: PropTypes.func.isRequired,
	resetPasswordRequest: PropTypes.func.isRequired,
	resetPasswordSuccess: PropTypes.func.isRequired,
	resetPasswordFailure: PropTypes.func.isRequired,
}

ResetPasswordPage.defaultProps = {
	error: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage)
