import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/auth'

const HomePage = ({ isAuth, logout }) => (
	<div>
		<h1>Home Page</h1>
		{isAuth ? (
			<button onClick={() => logout()}>Logout</button>
		) : (
			<div>
				<Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
			</div>
		)}
	</div>
)

HomePage.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {
		isAuth: !!state.user.token,
	}
}

export default connect(mapStateToProps, { logout })(HomePage)
