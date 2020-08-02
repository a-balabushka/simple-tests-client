import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/auth'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import Button from '../../components/UI/Button/Button'
import SocialLinks from '../../components/UI/SocialLinks/SocialLinks'

import './HomePage.scss'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'

const HomePage = ({ isAuth, logout }) => {
	const whenLogin = <button onClick={() => logout()}>Logout</button>
	const noLogin = (
		<>
			<Button to="/login" text="Log In" />
			<Button to="/signup" text="Sign Up" />
		</>
	)

	return (
		<>
			<TabTitle title="Welcome!" />
			<ContainerWithArt>
				<h1>Welcome to Simple Tests!</h1>
				<p>
					<span>Simple Tests</span> — Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
				<div className="button-container">{isAuth ? whenLogin : noLogin}</div>
				<SocialLinks />
			</ContainerWithArt>
		</>
	)
}

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
