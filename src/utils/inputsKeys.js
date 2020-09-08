/* ====== KEYS ============================================================== */

const email = {
	text: 'Email',
	label: 'email',
	type: 'text',
	placeholder: 'example@example.com',
}

const password = {
	text: 'Password',
	label: 'password',
	type: 'password',
	placeholder: '****************',
}

const passwordConfirmation = {
	text: 'Confirm password',
	label: 'passwordConfirmation',
	type: 'password',
	placeholder: 'Type password again',
}

const username = {
	text: 'Username',
	label: 'username',
	type: 'text',
	placeholder: 'johndoe'
}

const firstName = {
	text: 'First Name',
	label: 'firstName',
	type: 'text',
	placeholder: 'John'
}

const lastName = {
	text: 'Last Name',
	label: 'lastName',
	type: 'text',
	placeholder: 'Doe'
}

/* ====== INPUTS FOR FORMS ================================================== */

export const loginInputs = [email, password]
export const signupInputs = [username, email, firstName, lastName, password]
export const forgotPasswordInputs = [email]
export const resetPasswordInputs = [password, passwordConfirmation]
