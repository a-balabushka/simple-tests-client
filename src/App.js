import React from 'react'
import { Route } from 'react-router-dom'
import UserRoute from './components/routes/UserRoute/UserRoute'
import GuestRoute from './components/routes/GuestRoute/GuestRoute'
import HomePage from './containers/HomePage/HomePage'
import ConfirmationPage from './containers/ConfirmationPage/ConfirmationPage'
import LoginPage from './containers/LoginPage/LoginPage'
import DashboardPage from './containers/DashboardPage/DashboardPage'
import SignupPage from './containers/SingupPage/SignupPage'
import ForgotPasswordPage from './containers/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from './containers/ResetPasswordPage/ResetPasswordPage'

const App = () => (
	<div>
		<Route path="/" exact component={HomePage} />
		<Route path="/confirmation/:token" exact component={ConfirmationPage} />
		<GuestRoute path="/login" exact component={LoginPage} />
		<GuestRoute path="/signup" exact component={SignupPage} />
		<GuestRoute path="/forgot_password" exact component={ForgotPasswordPage} />
		<GuestRoute path="/reset_password/:token" exact component={ResetPasswordPage} />
		<UserRoute path="/dashboard" exact component={DashboardPage} />
	</div>
)

export default App
