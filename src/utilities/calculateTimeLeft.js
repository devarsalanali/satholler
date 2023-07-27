export const calculateTimeLeft = targetDateTime => {
	const now = new Date().getTime()
	const targetTime = new Date(targetDateTime).getTime()
	const timeDifference = targetTime - now

	if (timeDifference <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
	}

	const seconds = Math.floor((timeDifference / 1000) % 60)
	const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
	const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

	return {
		days,
		hours,
		minutes,
		seconds,
	}
}
