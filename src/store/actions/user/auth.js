import makeActionCreator from '../helper'
import { actionTypes, USER_LOGGED_IN, USER_LOGGED_OUT } from '../../types'
import api from '../../api'

const { request, success, failure } = actionTypes

export const userLoggedIn = (user) =>
	makeActionCreator(USER_LOGGED_IN, success, 'user')(user)

export const userLoggedOut = () => ({ type: USER_LOGGED_OUT })

/* ====== LOGIN ============================================================= */

export const login = (credentials) => (dispatch) =>
	api.user
		.login(credentials)
		.then(dispatch(makeActionCreator(USER_LOGGED_IN, request)()))

export const loginSuccess = (user) => (dispatch) => {
	localStorage.simpleTestsJWT = user.token
	dispatch(userLoggedIn(user))
}

export const loginFailure = (error) => (dispatch) =>
	dispatch(makeActionCreator(USER_LOGGED_IN, failure, 'error')(error))

/* ====== LOGOUT ============================================================ */

export const logout = () => (dispatch) => {
	localStorage.removeItem('simpleTestsJWT')
	dispatch(userLoggedOut())
}

/* ====== CONFIRM =========================================================== */

export const confirm = (token) => (dispatch) =>
	api.user.confirm(token).then((user) => {
		localStorage.simpleTestsJWT = user.token
		dispatch(userLoggedIn(user))
	})

/* ====== RESET PASSWORD ==================================================== */

export const resetPasswordRequest = (data) => (dispatch) => {
	api.user.resetPasswordRequest(data.email)
	dispatch(userLoggedOut())
}

export const validateToken = (token) => () => api.user.validateToken(token)

export const resetPassword = (data) => () => api.user.resetPassword(data)
