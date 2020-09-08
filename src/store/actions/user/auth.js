import makeActionCreator from '../helper'
import {
	actionTypes,
	USER_LOGGED_IN,
	USER_LOGGED_OUT,
	RESET_PASSWORD_REQUEST,
	VALIDATE_TOKEN,
	RESET_PASSWORD_ACCEPT
} from '../../types'
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

/* ====== RESET PASSWORD REQUEST ============================================ */

export const resetPasswordRequestRequest = (email) => (dispatch) =>
	api.user
		.resetPasswordRequest(email)
		.then(dispatch(makeActionCreator(RESET_PASSWORD_REQUEST, request)()))

export const resetPasswordRequestSuccess = () => (dispatch) =>
	dispatch(makeActionCreator(RESET_PASSWORD_REQUEST, success)())

export const resetPasswordRequestFailure = (error) => (dispatch) =>
	dispatch(makeActionCreator(RESET_PASSWORD_REQUEST, failure, 'error')(error))


/* ====== VALIDATE TOKEN ==================================================== */

export const validateTokenRequest = (token) => (dispatch) =>
	api.user
		.validateToken(token)
		.then(dispatch(makeActionCreator(VALIDATE_TOKEN, request)()))

export const validateTokenSuccess = () => (dispatch) =>
	dispatch(makeActionCreator(VALIDATE_TOKEN, success)())

export const validateTokenFailure = (error) => (dispatch) =>
	dispatch(makeActionCreator(VALIDATE_TOKEN, failure, 'error')(error))

/* ====== RESET PASSWORD ACCEPT ============================================= */

export const resetPasswordAcceptRequest = (data) => (dispatch) =>
	api.user
		.resetPassword(data)
		.then(dispatch(makeActionCreator(RESET_PASSWORD_ACCEPT, request)()))

export const resetPasswordAcceptSuccess = () => (dispatch) =>
	dispatch(makeActionCreator(RESET_PASSWORD_ACCEPT, success)())

export const resetPasswordAcceptFailure = (error) => (dispatch) =>
	dispatch(makeActionCreator(RESET_PASSWORD_ACCEPT, failure, 'error')(error))
