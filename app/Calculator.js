class Calculator {
	add (a, b) {
		return a + b
	}

	multiply (a, b) {
		return a * b
	}

	divide (a, b) {
		if (b != 0) {
			return a / b
		} else {
			throw new Exception('Division by Zero')
		}
	}

	subtract (a, b) {
		return a - b
	}
}

export default new Calculator()