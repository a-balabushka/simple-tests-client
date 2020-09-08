import makeActionCreator from '../helper'
import { actionTypes, USER_SIGN_UP } from '../../types'
import api from '../../api'

const { request, success, failure } = actionTypes

/* ====== SIGNUP ============================================================ */

export const signup = (data) => (dispatch) =>
	api.user
		.signup(data)
		.then(dispatch(makeActionCreator(USER_SIGN_UP, request)()))

export const signupSuccess = (user) => (dispatch) => {
	localStorage.simpleTestsJWT = user.token
	dispatch(makeActionCreator(USER_SIGN_UP, success, 'user')(user))
}

export const signupFailure = (error) => (dispatch) =>
	dispatch(makeActionCreator(USER_SIGN_UP, failure, 'error')(error))
