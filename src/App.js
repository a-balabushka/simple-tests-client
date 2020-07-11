import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage'
import LoginPage from './containers/LoginPage/LoginPage'

const App = () => <div>
	<Route path="/" exact component={HomePage} />
	<Route path="/login" exact component={LoginPage} />
</div>

export default App
