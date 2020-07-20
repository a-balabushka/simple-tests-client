import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import decode from 'jwt-decode'
import App from './App'
import rootReducer from './store/reducers/rootReducer'
import { userLoggedIn } from './store/actions/user/auth'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

if (localStorage.simpleTestsJWT) {
	const payload = decode(localStorage.simpleTestsJWT)
	const user = {
		email: payload.email,
		token: localStorage.simpleTestsJWT,
		confirmed: payload.confirmed
	}
	store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
