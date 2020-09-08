import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignupForm from '../../components/forms/SignupForm/SingupForm'
import {
	signup,
	signupSuccess,
	signupFailure,
} from '../../store/actions/user/users'
import { getError, getLoading } from '../../store/selectors/user'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'

const SignupPage = (props) => {
	const submit = (data) =>
		props
			.signup(data)
			.then((user) => {
				props.signupSuccess(user)
				props.history.push('/dashboard')
			})
			.catch((error) => props.signupFailure(error))

	return (
		<>
			<TabTitle title="Sign up" />
			<ContainerWithArt>
				<h1>Sign up</h1>
				<SignupForm
					submit={submit}
					loading={props.loading}
					serverError={props.error}
				/>
				<br />
			</ContainerWithArt>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: getLoading(state),
		error: getError(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (data) => dispatch(signup(data)),
		signupSuccess: (user) => dispatch(signupSuccess(user)),
		signupFailure: (error) => dispatch(signupFailure(error)),
	}
}

SignupPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	error: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	signup: PropTypes.func.isRequired,
	signupSuccess: PropTypes.func.isRequired,
	signupFailure: PropTypes.func.isRequired,
}

SignupPage.defaultProps = {
	error: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
