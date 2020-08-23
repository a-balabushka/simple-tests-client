import { actionTypes, USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'

const makeReducerString = (action, suffix) => `${action}_${suffix}`

const { request, success, failure } = actionTypes

const initState = {
	data: {},
	loading: false,
	error: null
}

export default function user(state = initState, action = {}) {
	switch (action.type) {
		case makeReducerString(USER_LOGGED_IN, request):
			return {
				...state,
				loading: true,
				error: null
			}
		case USER_LOGGED_IN:
		case makeReducerString(USER_LOGGED_IN, success):
			return {
				data: { ...action.user },
				loading: false,
				error: null
			}
		case makeReducerString(USER_LOGGED_IN, failure):
			return {
				...state,
				loading: false,
				error: action.error.response.data.error
			}


		case USER_LOGGED_OUT:
			return initState
		default:
			return state
	}
}
