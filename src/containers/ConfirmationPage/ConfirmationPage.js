import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { confirm } from '../../store/actions/user/auth'

class ConfirmationPage extends Component {
	state = {
		loading: true,
		success: false,
	}

	componentDidMount() {
		const { token } = this.props.match.params
		this.props
			.confirm(token)
			.then(() => this.setState({ loading: false, success: true }))
			.catch(() => this.setState({ loading: false, success: false }))
	}

	render() {
		const { loading, success } = this.state

		return (
			<div>
				<h1>Confirmation Email Page</h1>
				{loading && <h3>Validating your email</h3>}
				{!loading && success && (
					<div>
						<h3>Thank you. Your account has been verified</h3>
						<Link to="/dashboard">Go to dashboard</Link>
					</div>
				)}
				{!loading && !success && <h3>Oooops, invalid token =(</h3>}
			</div>
		)
	}
}

ConfirmationPage.propTypes = {
	confirm: PropTypes.func.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			token: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
}

export default connect(null, { confirm })(ConfirmationPage)
