import Joi from 'joi'

const loginFormValidation = (state) => {
	const schema = Joi.object().keys({
		email: Joi.string()
			.email({ tlds: { allow: ['com', 'net', 'ru'] } })
			.required()
			.messages({
				'any.required': 'Email should not be empty',
				'string.empty': 'Email should not be empty',
				'string.email': 'Email should have @ symbol and "com", "net" or "ru" domain',
			}),
		password: Joi.string().required().messages({
			'string.empty': 'Password should not be empty',
			'any.required': 'Password should not be empty',
		}),
	})

	const result = schema.validate(state, { abortEarly: false });
	return result.hasOwnProperty('error') ? result.error.details : null
}

export default loginFormValidation
