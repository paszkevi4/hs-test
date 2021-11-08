export const generateData = (depth = 2, number = 2) => {
	const result = []

	for (let i = 0; i < depth; i++) {
		if (i === 0) {
			for (let j = 0; j < number; j++) {
				const code = getRandomNumber()
				result.push({
					name: code,
					code,
				})
			}
		}
		result.forEach((item) => {
			item.children = generateData(i, number)
		})
	}

	return result
}

const getRandomNumber = () => {
	return Math.ceil(Math.random() * 1000)
}
