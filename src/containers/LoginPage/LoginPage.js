import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	login,
	loginSuccess,
	loginFailure,
} from '../../store/actions/user/auth'
import { getError, getLoading } from '../../store/selectors/user'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'
import LoginForm from '../../components/forms/LoginForm/LoginForm'

const LoginPage = (props) => {
	const submit = (data) =>
		props
			.login(data)
			.then((user) => {
				props.loginSuccess(user)
				props.history.push('/dashboard')
			})
			.catch((error) => props.loginFailure(error))

	return (
		<>
			<TabTitle title="Log In" />
			<ContainerWithArt>
				<h1>Log in</h1>
				<LoginForm
					submit={submit}
					loading={props.loading}
					serverError={props.error}
				/>
				<Link to="/forgot_password">Forgot password?</Link>
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

const mapDispatchToProp = (dispatch) => {
	return {
		login: (data) => dispatch(login(data)),
		loginSuccess: (user) => dispatch(loginSuccess(user)),
		loginFailure: (error) => dispatch(loginFailure(error)),
	}
}

LoginPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	error: PropTypes.shape({
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	login: PropTypes.func.isRequired,
	loginSuccess: PropTypes.func.isRequired,
	loginFailure: PropTypes.func.isRequired,
}

LoginPage.defaultProps = {
	error: null,
}

export default connect(mapStateToProps, mapDispatchToProp)(LoginPage)
