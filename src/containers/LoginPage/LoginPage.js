import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm/LoginForm'
import { login } from '../../store/actions/user/auth'

const LoginPage = props => {
	const submit = (data) =>
		props.login(data).then(() => props.history.push('/'))

	return (
		<div>
			<h1>Login Page</h1>
			<LoginForm submit={submit} />
		</div>
	)
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
}

export default connect(null, { login })(LoginPage)
