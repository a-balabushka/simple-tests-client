import {
	actionTypes,
	USER_LOGGED_IN,
	USER_LOGGED_OUT,
	USER_SIGN_UP,
	RESET_PASSWORD_ACCEPT,
	VALIDATE_TOKEN,
	RESET_PASSWORD_REQUEST,
} from '../types'

const makeReducerString = (action, suffix) => `${action}_${suffix}`

const { request, success, failure } = actionTypes

const initState = {
	data: {},
	loading: false,
	error: null,
}

export default function user(state = initState, action = {}) {
	switch (action.type) {
		case makeReducerString(USER_LOGGED_IN, request):
		case makeReducerString(USER_SIGN_UP, request):
		case makeReducerString(RESET_PASSWORD_REQUEST, request):
		case makeReducerString(VALIDATE_TOKEN, request):
		case makeReducerString(RESET_PASSWORD_ACCEPT, request):
			return {
				...state,
				loading: true,
				error: null,
			}

		case USER_LOGGED_IN:
		case makeReducerString(USER_LOGGED_IN, success):
		case makeReducerString(USER_SIGN_UP, success):
		case makeReducerString(RESET_PASSWORD_REQUEST, success):
		case makeReducerString(VALIDATE_TOKEN, success):
		case makeReducerString(RESET_PASSWORD_ACCEPT, success):
			return {
				data: { ...action.user },
				loading: false,
				error: null,
			}

		case makeReducerString(USER_LOGGED_IN, failure):
		case makeReducerString(USER_SIGN_UP, failure):
		case makeReducerString(RESET_PASSWORD_REQUEST, failure):
		case makeReducerString(VALIDATE_TOKEN, failure):
		case makeReducerString(RESET_PASSWORD_ACCEPT, failure):
			return {
				...state,
				loading: false,
				error: action.error.response.data.error,
			}

		case USER_LOGGED_OUT:
			return initState
		default:
			return state
	}
}
