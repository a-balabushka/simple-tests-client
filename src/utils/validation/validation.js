import Joi from 'joi'
import { loginSchemas } from '../keys/user'
import makeValidationMessage from '../makeValidationMessage'

const loginFormValidation = (state) => {
	const schema = Joi.object().keys(loginSchemas)
	const result = schema.validate(state, { abortEarly: false });
	return result.error && makeValidationMessage(result.error.details)
}

export default loginFormValidation
