const makeValidationMessage = (validationResult) => {
	const message = {}
	for (let i = 0; i < validationResult.length; i++) {
		const item = validationResult[i]
		message[item.context.key] = item.message
	}
	return message
}

export default makeValidationMessage
