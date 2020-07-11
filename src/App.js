import React from 'react'
import { Route } from 'react-router-dom'
import UserRoute from './components/routes/UserRoute/UserRoute'
import GuestRoute from './components/routes/GuestRoute/GuestRoute'
import HomePage from './containers/HomePage/HomePage'
import LoginPage from './containers/LoginPage/LoginPage'
import DashboardPage from './containers/DashboardPage/DashboardPage'

const App = () => <div>
	<Route path="/" exact component={HomePage} />
	<GuestRoute path="/login" exact component={LoginPage} />
	<UserRoute path="/dashboard" exact component={DashboardPage} />
</div>

export default App
