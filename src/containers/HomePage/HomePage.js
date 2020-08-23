import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/user/auth'
import { getIsAuth } from '../../store/selectors/user'
import TabTitle from '../../components/UI/TabTitle/TabTitle'
import Button from '../../components/UI/Button/Button'
import SocialLinks from '../../components/UI/SocialLinks/SocialLinks'

import './HomePage.scss'
import ContainerWithArt from '../../components/UI/ContainerWithArt/ContainerWithArt'

const HomePage = ({ isAuth, logout }) => {
	const whenLogin = <button onClick={() => logout()}>Logout</button>
	const noLogin = (
		<>
			<Button isLink={true} to="/login" text="Log In" />
			<Button isLink={true} to="/signup" text="Sign Up" />
		</>
	)

	return (
		<>
			<TabTitle title="Welcome!" />
			<ContainerWithArt>
				<h1>Welcome</h1>
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
				<div className="button-container-column">
					{isAuth ? whenLogin : noLogin}
				</div>
				<SocialLinks />
			</ContainerWithArt>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state),
	}
}

const mapDispatchToProp = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	}
}

HomePage.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProp)(HomePage)
