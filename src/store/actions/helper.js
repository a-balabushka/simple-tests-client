export default function makeActionCreator(type, suffix, ...argNames) {
	return function (...args) {
		const action = { type: `${type}_${suffix}` }
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index]
		})
		return action
	}
}
