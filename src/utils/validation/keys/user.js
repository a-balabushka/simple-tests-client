import Joi from 'joi'

const minNameLength = 2
const maxNameLength = 20
const passwordMinLength = 6
const usernameMinLength = 6

const notEmptyStr = (label) => `${label} should not be empty`

const stringMinMessage = (label, length) =>
	`${label} must contain at least ${length} symbols`

const createMessagesSizes = (label, min, max) => {
	return {
		'string.empty': notEmptyStr('Last name'),
		'string.min': stringMinMessage(label, min),
		'string.max': stringMinMessage(label, max),
	}
}

/* ====== KEYS ============================================================== */

const email = Joi.string()
	.email({ tlds: { allow: ['com', 'net', 'ru'] } })
	.required()
	.messages({
		'string.empty': notEmptyStr('Email'),
		'string.email': 'Email should have "com", "net" or "ru" domain',
	})

const password = Joi.string()
	.min(passwordMinLength)
	.required()
	.messages({
		'string.empty': notEmptyStr('Password'),
		'string.min': stringMinMessage('Password', passwordMinLength),
	})

const passwordConfirmation = password

const username = Joi.string()
	.min(usernameMinLength)
	.max(maxNameLength)
	.regex(/^[a-zA-Z0-9]+$/)
	.required()
	.messages({
		...createMessagesSizes('Username', usernameMinLength, maxNameLength),
		'string.pattern.base': 'Username may contain letters or numbers',
	})

const firstName = Joi.string()
	.min(minNameLength)
	.max(maxNameLength)
	.regex(/^([a-zA-Z])+$/)
	.required()
	.messages({
		...createMessagesSizes('First Name', minNameLength, maxNameLength),
		'string.pattern.base': 'First name may contain only letters',
	})

const lastName = Joi.string()
	.min(minNameLength)
	.max(maxNameLength)
	.regex(/^[a-zA-Z-]+$/)
	.required()
	.messages({
		...createMessagesSizes('Last Name', minNameLength, maxNameLength),
		'string.pattern.base': 'Last name may contain letters and symbol "-"',
	})

/* ====== KEYS FOR SCHEMAS =++=============================================== */

export const loginSchemas = { email, password }
export const signupSchemas = { username, email, firstName, lastName, password }
export const forgotPasswordSchemas = { email }
export const resetPasswordSchemas = { password, passwordConfirmation }
