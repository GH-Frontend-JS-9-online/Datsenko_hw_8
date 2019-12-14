const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

const greeting = name => {
	let result = (name in GUEST_LIST) ?
		`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` :
		`Hi! I'm a guest.`
	return result
}

module.exports = greeting