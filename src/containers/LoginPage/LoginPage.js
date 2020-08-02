import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../store/actions/user/auth'
import { Link } from 'react-router-dom'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import LoginForm from '../../components/forms/LoginForm/LoginForm'

const LoginPage = (props) => {
	const submit = (data) =>
		props.login(data).then(() => props.history.push('/dashboard'))

	return (
		<>
			<TabTitle title="Log In" />
			<div>
				<h1>Log In to Simple Tests</h1>
				<LoginForm submit={submit} />
				<Link to="/forgot_password">Forgot password?</Link>
			</div>
		</>
	)
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
}

export default connect(null, { login })(LoginPage)
