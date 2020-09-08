import Joi from 'joi'

const validation = (state, formSchema) => {
	const schema = Joi.object().keys(formSchema)
	const result = schema.validate(state, { abortEarly: false });
	return result.error && makeValidationMessage(result.error.details)
}

function makeValidationMessage(validationResult) {
	const message = {}
	for (let i = 0; i < validationResult.length; i++) {
		const item = validationResult[i]
		message[item.context.key] = item.message
	}
	return message
}

export default validation
