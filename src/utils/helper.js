export const chooseError = (validationResult, serverError, label) => {
	const checkError = (obj, key) => (obj ? obj[key] : null)
	return checkError(validationResult, label) || checkError(serverError, label)
}
